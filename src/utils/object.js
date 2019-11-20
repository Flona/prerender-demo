'use strict';

import typeis from './typeis';

/**
 * 遍历
 * @param object
 * @param fn
 */
export function each(object, fn) {
    for (let key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            fn.call(object[key], key, object[key]);
        }
    }
}

/**
 * 合并对象
 * @param objectList
 * @returns {*}
 */
export function assign(...objectList) {
    const merge = (o1, o2) => {
        const type1 = typeis(o1);
        const type2 = typeis(o2);

        if (type1 !== type2) {
            return o2;
        }

        if (type1 === 'object') {
            each(o2, key => {
                o1[key] = merge(o1[key], o2[key]);
            });
            return o1;
        } else if (type1 === 'array') {
            o2.forEach((val, index) => {
                o1[index] = merge(o1[index], o2[index]);
            });
            return o1;
        }

        return o2;
    };

    let o1 = objectList.shift();
    let o2;

    while ((o2 = objectList.shift())) {
        o1 = merge(o1, o2);
    }

    return o1;
}
