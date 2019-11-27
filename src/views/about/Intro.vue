<template>
    <div class="intro">
        <section class="intro-header">
            <PlaceholderImage :img="imgs.banner" width="100%" height="650px" />
            <div class="intro-header-title">
                <p class="wow slideInUp">{{ $t('about.intro.header.title') }}</p>
            </div>
        </section>

        <section class="intro-understand intro-module cover-image" :style="understandStyle">
            <div class="intro-module main">
                <h1 class="wow slideInUp">{{ $t('about.intro.understand.title') }}</h1>
                <p class="content wow slideInUp">{{ $t('about.intro.understand.content') }}</p>
                <AboutTag />
            </div>
        </section>

        <section class="intro-culture intro-module">
            <h1 class="wow slideInUp">{{ $t('about.intro.culture.title') }}</h1>
            <AboutCultureCard />
        </section>
    </div>
</template>

<script>
import PlaceholderImage from '@/components/PlaceholderImage';
import AboutTag from '@/components/tag/AboutTag';
import AboutCultureCard from '@/components/card/aboutCultureCard';

import banner from '@/assets/imgs/banner2.png';
import understandMap from '@/assets/imgs/banner4.png';
import patentBg from '@/assets/imgs/banner3.png';

export default {
    name: 'Intro',
    components: {
        PlaceholderImage,
        AboutTag,
        AboutCultureCard
    },
    data() {
        return {
            imgs: {
                banner
            },
            understandStyle: {
                backgroundImage: `url(${understandMap})`
            }
        };
    },
    created() {
        this.$nextTick(() => {
            this.wowInit();
        });
    },
    methods: {
        wowInit() {
            new this.$wow.WOW({ live: false }).init();
        }
    }
};
</script>

<style lang="scss" scoped>
.intro {
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

        &-title {
            font-size: 58px;
            font-weight: bold;
            color: #fff;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 1200px;
            margin-left: 119px;
            padding-bottom: 67px;
        }
    }

    &-understand {
        height: 600px;
        background-size: cover;
        background-position: center;
        .main {
            background: linear-gradient(180deg, rgba(0, 0, 1, 1) 0%, rgba(0, 0, 1, 1) 50%, rgba(0, 0, 1, 0) 100%);
            color: #fff;
            h1 {
                margin: 89px 0 26px;
            }
            .content {
                width: 814px;
                margin-bottom: 85px;
                font-size: 16px;
                line-height: 24px;
            }
        }
    }

    &-culture {
        margin: 88px 0;
        h1 {
            margin-bottom: 56px;
        }
    }
}
</style>
