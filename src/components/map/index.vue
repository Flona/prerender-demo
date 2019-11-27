<template>
    <div id="js-container" class="about-map">
        <div class="about-map-loading">Loading ...</div>
    </div>
</template>

<script>
import remoteLoad from '@/utils/remoteLoad.js';
import { MapKey, MapCityName } from '@/config/map';
import { getLocation, getPOI } from '@/services/about';

export default {
    // lat: 纬度 lng: 经度
    props: {
        location: {
            type: Array
        }
    },
    data() {
        return {
            AMapUI: null,
            AMap: null,
            locations: ['北京市东城区长安街北侧', '锦州市北镇市中街步行街', '重庆市南岸区文峰正街老厂金竹村'],
            map: null,
            marker: null
        };
    },
    computed: {
        lang() {
            return this.$store.state.lang.language;
        },
        mapLang() {
            return this.lang === 'en' ? 'en' : 'zh_cn';
        },
        activeLocation() {
            return this.locations[2];
        }
    },
    watch: {
        lang() {
            if (this.map) {
                this.map.setLang(this.mapLang);
            }
        },
        location(n) {
            if (this.marker && this.map) {
                this.marker.setPosition(n);
                this.map.setCenter(n);
            }
        }
    },
    methods: {
        initMap() {
            let mapConfig = {
                zoom: 16,
                cityName: MapCityName,
                center: this.location,
                lang: this.mapLang
            };
            this.map = new AMap.Map('js-container', mapConfig);

            AMap.plugin(['AMap.ToolBar'], () => {
                this.map.addControl(
                    new AMap.ToolBar({
                        position: 'RB'
                    })
                );
                // web端方式 API-Key类型不同
                // this.geocoder(this.map);
                // web服务方式 API-Key类型不同
                // this.getLocation(this.map);
                // 搜索方式，按照详细地址搜索，取第一个结果值，定位是最准确的，上面的地理编码方式定位都有偏差
                // this.searchLocation();
                // 经纬度由后台传入，非前端转换
                this.setLocation();
            });
        },

        setLocation() {
            this.marker = new AMap.Marker({
                map: this.map,
                position: this.location
            });
            this.map.setCenter(this.location);
        },

        async searchLocation() {
            const data = await getPOI(this.activeLocation);

            if (data.info === 'OK') {
                const ll = data.pois[0].location.split(',');
                const marker = new AMap.Marker({
                    map: this.map,
                    position: ll
                });

                this.map.setFitView();
            } else {
                this.getLocation();
            }
        },

        async getLocation() {
            const data = await getLocation(this.location);

            if (data.info === 'OK') {
                const ll = data.geocodes[0].location.split(',');

                const marker = new AMap.Marker({
                    map: this.map,
                    position: ll
                    // 杭州
                    // offset: new AMap.Pixel(-167, 40)
                    // 重庆
                    // offset: new AMap.Pixel(140, 85)
                });

                this.map.setFitView();
            }
        },

        geocoder(map) {
            var geocoder = new AMap.Geocoder({
                radius: 1000
            });
            //地理编码,返回地理编码结果
            geocoder.getLocation(this.location, (status, result) => {
                if (status === 'complete' && result.info === 'OK') {
                    this.geocoder_CallBack(map, result);
                }
            });
        },

        addMarker(i, d) {
            const marker = new AMap.Marker({
                map: this.map,
                position: [d.location.getLng(), d.location.getLat()]
            });
        },

        geocoder_CallBack(data) {
            //地理编码结果数组
            var geocode = data.geocodes;
            for (var i = 0; i < geocode.length; i++) {
                this.addMarker(i, geocode[i]);
            }
            this.map.setFitView();
        }
    },
    created() {
        if (window.AMap && window.AMapUI) {
            this.initMap();
        } else {
            window.onLoad = this.initMap;
            const url = `https://webapi.amap.com/maps?v=1.4.15&key=${MapKey}&callback=onLoad`;
            remoteLoad(url);
        }
    }
};
</script>

<style lang="scss" scoped>
.about-map {
    width: 100%;
    height: 402px;

    &-loading {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>
