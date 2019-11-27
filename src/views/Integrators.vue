<template>
    <div class="integrators">
        <section class="integrators-header">
            <PlaceholderImage :img="imgs.banner" width="100%" height="650px" />
            <div class="integrators-header-content">
                <p class="title wow slideInUp">{{ $t('integrators.header.title') }}</p>
                <p class="des wow slideInUp">{{ $t('integrators.header.des') }}</p>
                <el-button class="wow slideInUp disabled" type="primary" @click="toWebsite">
                    {{ $t('integrators.header.button') }}
                </el-button>
            </div>
        </section>

        <section class="integrators-module integrators-intro cover-image">
            <h1 class="wow slideInUp">{{ $t('integrators.intro.title') }}</h1>
            <p class="des wow slideInUp">{{ $t('integrators.intro.des') }}</p>
            <IntegratorsTag />
        </section>

        <section class="integrators-module integrators-features">
            <h1 class="wow slideInUp">{{ $t('integrators.features.title') }}</h1>
            <IntegratorsFeaturesCard />
        </section>
    </div>
</template>

<script>
import IntegratorsTag from '@/components/tag/IntegratorsTag';
import IntegratorsFeaturesCard from '@/components/card/IntegratorsFeaturesCard';
import PlaceholderImage from '@/components/PlaceholderImage';

import banner from '@/assets/imgs/banner3.png';

export default {
    name: 'Integrators',
    components: {
        PlaceholderImage,
        IntegratorsTag,
        IntegratorsFeaturesCard
    },
    data() {
        return {
            imgs: {
                banner
            }
        };
    },
    created() {
        this.$nextTick(() => {
            this.wowInit();
        });
    },
    methods: {
        toWebsite() {
            // window.open('https://www.lagou.com/gongsi/j451116.html');
        },
        wowInit() {
            new this.$wow.WOW({ live: false }).init();
        }
    }
};
</script>

<style lang="scss" scoped>
.integrators {
    // common
    &-module {
        width: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        h1 {
            font-size: 48px;
            font-weight: 500;
        }
    }

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
                margin: 31px 0 80px;
            }
        }
    }

    &-intro {
        height: 600px;
        background-image: url('~@/assets/imgs/banner4.png');
        padding-top: 88px;
        color: #fff;
        .des {
            width: 668px;
            font-size: 16px;
            line-height: 24px;
            margin: 27px 0 61px;
        }
    }

    &-features {
        padding: 88px 0 87px;
        background-color: $app-background-color3;
        h1 {
            margin-bottom: 90px;
        }
    }
}
</style>
