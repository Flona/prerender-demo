/**
 * example
 * @author ydr.me
 * @create 2019-09-26 19:48:41
 * @update 2019-09-26 19:48:41
 */

'use strict';

/**
 * 获取一个随机值
 * @returns {Promise<unknown>}
 */
export const getRandom = async () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(Math.random());
        }, 1000);
    });
};
