<template>
    <div class="home">
        <HomeSummaryCarousel />

        <section class="home__module">
            <h1 class="wow slideInUp">{{ $t('home.module1.title') }}</h1>
            <VideoPlayer />
        </section>

        <section class="home__module">
            <h1 class="wow slideInUp">{{ $t('home.module2.title') }}</h1>
            <HomeServiceCard />
        </section>

        <section class="home__module">
            <h1 class="wow slideInUp">{{ $t('home.module3.title') }}</h1>
            <HomeCooperationCarousel />
        </section>
    </div>
</template>

<script>
import HomeSummaryCarousel from '@/components/carousel/HomeSummaryCarousel';
import VideoPlayer from '@/components/media/VideoPlay';
import HomeServiceCard from '@/components/card/HomeServiceCard';
import HomeCooperationCarousel from '@/components/carousel/HomeCooperationCarousel';

export default {
    name: 'Home',

    data() {
        return {
            carouselHeight: '100vh'
        };
    },

    components: {
        HomeSummaryCarousel,
        VideoPlayer,
        HomeServiceCard,
        HomeCooperationCarousel
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

<style scoped lang="scss">
.home {
    &__module {
        margin: 100px 0;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        h1 {
            font-size: 48px;
            font-weight: 500;
            margin-bottom: 33px;
        }
    }
}
</style>
