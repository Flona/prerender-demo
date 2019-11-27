import axios from '@/services/axios';
import picture from '@/assets/imgs/demo3.png';
/** 合作伙伴
 *
 * @returns {Promise<*>}
 */
export const getPartnerList = async () => {
    return new Promise(resolve => {
        setTimeout(() => {
            let arr = [];
            for (let i = 0; i < 16; i++) {
                const obj = {
                    id: i,
                    picture
                };
                arr.push(obj);
            }
            resolve({ list: arr });
        }, 1000);
    });
};
