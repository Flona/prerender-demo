<template>
    <div class="join">
        <section class="join-header" id="join-header">
            <PlaceholderImage :img="imgs.banner" width="100%" height="100vh" />
            <div class="join-header-content">
                <p class="title wow slideInUp">{{ $t('about.join.header.title') }}</p>
                <p class="des wow slideInUp">{{ $t('about.join.header.des') }}</p>
                <el-button class="des wow slideInUp" type="primary" @click="toJobs">
                    {{ $t('about.join.header.button') }}
                </el-button>
            </div>
        </section>
        <section class="join-jobs">
            <div class="join-jobs-content">
                <div class="place">
                    <p class="place-header">{{ $t('about.join.place') }}:</p>
                    <AboutJobsTab @changePlace="onChangePlace" />
                </div>
                <JobsCollapse :activeCity="activeCity" />
            </div>
            <div class="join-jobs-website">
                <p>{{ $t('about.join.moreJobs') }}</p>
                <el-image @click="toBoss" :style="websiteStyle" :src="imgs.boss" fit="cover"></el-image>
                <el-image @click="toLagou" :style="websiteStyle" :src="imgs.lagou" fit="cover"></el-image>
            </div>
        </section>
        <Footer />
    </div>
</template>

<script>
import PlaceholderImage from '@/components/PlaceholderImage';
import AboutJobsTab from '@/components/tab/aboutJobsTab';
import JobsCollapse from '@/components/collapse/JobsCollapse';
import Footer from '@/layout/Footer';

import banner from '@/assets/imgs/banner4.png';

export default {
    name: 'AboutJoin',
    components: {
        PlaceholderImage,
        AboutJobsTab,
        JobsCollapse,
        Footer
    },
    data() {
        return {
            imgs: {
                banner
            },
            activeCity: '全部',
            websiteStyle: {
                width: '42px',
                height: '42px',
                cursor: 'pointer'
            }
        };
    },
    created() {
        this.$nextTick(() => {
            this.wowInit();
        });
    },
    methods: {
        toJobs() {
            const h = document.getElementById('join-header').clientHeight;
            window.scrollTo({
                top: h - 80,
                behavior: 'smooth'
            });
        },
        onChangePlace(place) {
            this.activeCity = place;
        },
        toBoss() {
            window.open('https://www.zhipin.com');
        },
        toLagou() {
            window.open('https://www.lagou.com');
        },
        wowInit() {
            new this.$wow.WOW({ live: false }).init();
        }
    }
};
</script>

<style lang="scss" scoped>
.join {
    &-header {
        position: relative;

        &-content {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #fff;
            text-align: center;

            .title {
                font-size: 56px;
                font-weight: 500;
            }

            .des {
                font-size: 20px;
                margin: 39px 0 52px;
            }
        }
    }

    &-jobs {
        background-color: $app-background-color2;
        padding: 60px 0;
        display: flex;
        justify-content: center;

        &-content {
            width: 900px;
            background-color: #fff;
            padding: 54px 0;

            .place {
                padding: 0 64px;
                display: flex;
                align-items: baseline;

                &-header {
                    margin-right: 10px;
                }
            }
        }

        &-website {
            width: 42px;
            height: 150px;
            margin: 17px 0 0 28px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;

            p {
                width: 29px;
                line-height: 1.5em;
                font-size: 14px;
                color: $app-text-6-color;
                text-align: center;
            }
        }
    }
}
</style>
