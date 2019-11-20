/**
 * css-module
 * @ref https://github.com/fjc0k/vue-css-modules
 */

'use strict';

// 字符串类型
const TYPE_STRING = 0;
// 分配类型
const TYPE_ASSIGN = 1;
// 条件类型
const TYPE_CONDITION = 2;

/**
 * css 模块化
 * @param [clsNameAttr='cls-name'] {String} 占位属性名称
 * @param [clsPropAttr='cls-prop'] {Object} 向子组件传递类名
 * @returns {{ beforeCreate() }}
 */
export default function cssModule(clsNameAttr = 'cls-name', clsPropAttr = 'cls-prop') {
    // @link https://cn.vuejs.org/v2/guide/render-function.html#createElement-%E5%8F%82%E6%95%B0
    const createElementBinding = function(ch) {
        const args = [].slice.call(arguments, 1);
        const { h } = ch;
        // 当前的组件样式
        const thisContext = ch.c;
        const { $style: thisStyles, $vnode } = thisContext;
        const { data: propData, context: propContext } = $vnode || {};
        // 传递的组件样式
        const { $style: propStyles } = propContext || {};
        const thisData = args[1];

        if (thisData && thisData.attrs && thisStyles) {
            let { staticClass = '' } = thisData;
            // 在子组件中 propData 指向 thisData
            thisData[clsPropAttr] = thisData.attrs[clsPropAttr];
            const clsName = (thisData.attrs[clsNameAttr] || '').trim();
            const clsProp = (propData[clsPropAttr] || '').trim();
            delete thisData.attrs[clsNameAttr];
            delete thisData.attrs[clsPropAttr];
            const clsOriginList = [];
            let clsPropMap;

            if (clsProp && propStyles) {
                const clsPropList = parseClassExpression(clsProp);
                clsPropMap = clsPropList.reduce(function(prev, curr, index, list) {
                    const pd = evalClassExpression(curr, thisContext);
                    const { c, s } = pd;

                    if (propStyles[s]) {
                        prev[c] = propStyles[s];
                    }

                    return prev;
                }, {});
            }

            if (clsName) {
                const clsNameList = parseClassExpression(clsName);

                clsNameList.forEach(exp => {
                    const pd = evalClassExpression(exp, thisContext);

                    const { c, s } = pd;

                    if (thisStyles[s]) {
                        clsOriginList.push(thisStyles[s]);
                    }

                    if (clsPropMap && clsPropMap[c]) {
                        clsOriginList.push(clsPropMap[c]);
                    }
                });
            }

            if (clsOriginList.length) {
                if (staticClass) {
                    staticClass += ' ';
                }

                staticClass += clsOriginList.join(' ');
                thisData.staticClass = staticClass;
            }
        }

        return h.apply(thisContext, args);
    };

    return {
        beforeCreate() {
            const h = this._c;

            this._c = createElementBinding.bind(this, {
                c: this,
                h: h
            });
        }
    };
}

/**
 * 解析 class 表达式成数组
 * 支持以下表达式：
 * - 纯字符串：abc
 * - 三目运算：abc?def
 * - 复杂三目运算：abc && def ? xyz : demo
 * - 变量：abc${def}
 * - 赋予：abc=def
 * - 赋予与变量：abc=def${xyz}
 * @param expression
 * @returns {[{r: String, e: String, k: String, v: String, t: Number}]}
 */
const parseClassExpression = expression => {
    const raw = expression;
    expression = expression.replace(/[\n\r]/g, ' ');

    let inGroup = 0;
    let noEqual = false;
    let inEqual = 0;
    const groups = [];
    const temp = [];
    const pushTemp = char => {
        temp.push(char);
    };
    const pushGroup = () => {
        if (inGroup > 0) {
            return;
        }

        groups.push(temp.join(''));
        temp.length = 0;
    };
    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];

        switch (char) {
            case ' ':
                pushTemp(char);
                pushGroup();
                break;

            // !=
            // >=
            // <=
            case '!':
                noEqual = true;
                pushTemp(char);
                break;

            case '=':
                if (noEqual) {
                    noEqual = false;
                } else {
                    inEqual++;
                }

                pushTemp(char);
                break;

            case '(':
                // 内括号
                if (inGroup > 0) {
                    pushTemp(char);
                }
                inGroup++;
                break;

            case ')':
                inGroup--;
                if (inGroup > 0) {
                    pushTemp(char);
                }
                pushGroup();
                break;

            default:
                if (inEqual === 1) {
                    temp.splice(-1, 0, ' ');
                    pushTemp(' ');
                    inEqual = 0;
                }

                pushTemp(char);
                break;
        }
    }

    pushGroup();

    const result = [];
    groups.forEach(group => {
        group = group.trim();

        if (!group) {
            return;
        }

        const slicees = group.split(/\s+/);
        // 等于运算
        let inAssign = false;
        // 真运算
        let inTrue = false;
        // 假运算
        let inFalse = false;
        const constant = str => {
            return '`' + str + '`';
        };
        const unshift = slice => {
            temp.unshift(slice);
        };
        const push = slice => {
            temp.push(slice);
        };
        const combine = () => {
            let r = raw;
            let e = temp.join('');
            let k = e;
            let v = e;
            let t = type;

            if (type === TYPE_ASSIGN) {
                k = temp[0];
                v = temp[2];
            } else if (type === TYPE_CONDITION && inFalse === false) {
                k += ':``';
                v = k;
            }

            result.unshift({
                r,
                e,
                k,
                v,
                t
            });
            temp.length = 0;
        };

        // 倒序进行匹配
        let slice;
        let type = TYPE_STRING;
        while ((slice = slicees.pop())) {
            switch (slice) {
                case '=':
                    inAssign = true;
                    unshift(slice);
                    break;

                case '?':
                    inTrue = true;
                    unshift(slice);
                    break;

                case ':':
                    inFalse = true;
                    unshift(slice);
                    break;

                default:
                    if (inAssign) {
                        unshift(constant(slice));
                        type = TYPE_ASSIGN;
                    } else if (inTrue) {
                        unshift(slice);
                        type = TYPE_CONDITION;
                    } else if (inFalse) {
                        unshift(constant(slice));
                    } else {
                        unshift(constant(slice));
                    }
            }
        }

        combine();
    });

    return result;
};

/**
 * 求值 class 表达式
 * @param exp {{r: String, e: String, k: String, v: String, t: Number}} 表达项，经过解析后的结果
 * @param context {Object} 上下文
 * @returns {{c: String, s: String}}
 */
const evalClassExpression = function(exp, context) {
    const { e, r, k, v, t } = exp;
    const evaluate = statement => {
        try {
            return new Function(`with(this){return String(${statement});}`).call(context);
        } catch (err) {
            throw new Error(`css-module 语法错误\n原始表达式：${r}\n语法表达式：${e}\n错误原因：${err.message}`);
        }
    };

    const className = evaluate(k);
    const styleName = evaluate(v);

    return { c: className, s: styleName };
};
