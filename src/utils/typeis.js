'use strict';

/**
 * 判断数据类型
 * @param any
 * @returns {string}
 */
export default function(any) {
    const udf = 'undefined';

    if (typeof any === udf) {
        return udf;
    }

    return Object.prototype.toString
        .call(any)
        .slice(8, -1)
        .toLowerCase();
}
