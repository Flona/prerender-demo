import axios from '@/services/axios';
import { MapKey } from '@/config/map';
import { careerList, careerList1, careerList2, careerList3 } from './data';

/** 获取经纬度
 *
 * @param address
 * @returns {Promise<*>}
 */
export async function getLocation(address) {
    const res = await axios({
        url: 'https://restapi.amap.com/v3/geocode/geo',
        params: {
            key: MapKey,
            address
        }
    });
    return res.data;
}

/** 搜索POI
 *
 * @param address
 * @returns {Promise<*>}
 */
export async function getPOI(address) {
    const res = await axios({
        url: 'https://restapi.amap.com/v3/place/text',
        params: {
            key: MapKey,
            keywords: address,
            // 仅返回一条
            offset: 10
        }
    });
    return res.data;
}

/** 搜索岗位列表
 *
 * @param pageSize
 * @param pageNumber
 * @param city
 * @returns {Promise<*>}
 */
export const getCareerList = async (pageSize, pageNumber, city) => {
    return new Promise(resolve => {
        setTimeout(() => {
            switch (city) {
                case '':
                    resolve(careerList);
                    break;
                case '北京':
                    resolve(careerList1);
                    break;
                case '辽宁':
                    resolve(careerList2);
                    break;
                case '重庆':
                    resolve(careerList3);
                    break;

                default:
                    break;
            }
        }, 100);
    });
};

/** 搜索岗位城市列表
 *
 * @returns {Promise<*>}
 */
export async function getCityList() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(['北京', '辽宁', '重庆']);
        }, 100);
    });
}
