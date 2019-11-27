<template>
    <div class="contact">
        <section class="contact-header">
            <PlaceholderImage :img="imgs.banner" width="100%" height="650px" />
            <div class="contact-header-main">
                <p class="title wow slideInUp">{{ $t('about.contact.header.title') }}</p>
                <p class="des wow slideInUp">{{ $t('about.contact.header.des') }}</p>
            </div>
        </section>

        <section class="contact-way">
            <section class="contact-way-main">
                <h1>{{ $t('about.contact.way.title') }}</h1>
                <section class="map">
                    <div class="map-tabs">
                        <AboutAddressTab @changeLocation="onChangeLocation" />
                    </div>
                    <AboutMapCard class="map-info" :location="activeLocation" />
                    <Map :location="activeLocation.location" />
                </section>
            </section>
        </section>
    </div>
</template>
<script>
import banner from '@/assets/imgs/banner3.png';
import PlaceholderImage from '@/components/PlaceholderImage';
import Map from '@/components/map/index.vue';
import AboutAddressTab from '@/components/tab/aboutAddressTab';
import AboutMapCard from '@/components/card/AboutMapCard';

export default {
    name: 'AboutContact',
    components: {
        PlaceholderImage,
        Map,
        AboutAddressTab,
        AboutMapCard
    },
    data() {
        return {
            imgs: {
                banner
            },
            activeLocation: {}
        };
    },
    created() {
        this.$nextTick(() => {
            this.wowInit();
        });
    },
    methods: {
        onChangeLocation(location) {
            this.activeLocation = location;
        },
        wowInit() {
            new this.$wow.WOW({ live: false }).init();
        }
    }
};
</script>

<style lang="scss" scoped>
.contact {
    background-color: $app-background-color2;
    overflow: hidden;
    &-header {
        position: relative;

        &-main {
            font-weight: bold;
            color: #fff;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 1200px;
            margin-left: 119px;
            padding-bottom: 63px;
            font-size: 22px;

            .title {
                font-size: 58px;
                margin-bottom: 24px;
            }
        }
    }

    &-way {
        margin: 34px auto 56px;
        display: flex;
        justify-content: center;

        &-main {
            background-color: #fff;
            width: 1100px;
            height: 700px;
            padding: 38px 48px 54px;
            h1 {
                font-size: 22px;
                font-weight: 500;
                color: $app-text-4-color;
                padding-bottom: 31px;
                border-bottom: 1px solid $app-grey-13-color;
            }
            .map {
                height: 482px;
                position: relative;
                margin: 40px 0 38px;
                border: 1px solid $app-grey-15-color;

                &-tabs {
                    height: 80px;
                    background-color: $app-grey-13-color;
                }

                &-info {
                    width: 220px;
                    background-color: #fff;
                    position: absolute;
                    top: 106px;
                    left: 25px;
                    z-index: 1;
                }
            }
        }
    }
}
</style>
