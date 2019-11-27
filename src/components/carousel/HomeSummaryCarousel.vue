<template>
    <div class="home__banner">
        <el-carousel :interval="5000" height="650px" arrow="never" :autoplay="false">
            <el-carousel-item v-for="item in carouselList" :key="item.id">
                <PlaceholderImage :img="item.url" width="100%" height="100%" />
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
import PlaceholderImage from '@/components/PlaceholderImage';

export default {
    name: 'HomeCarousel',
    components: {
        PlaceholderImage
    },
    data() {
        return {
            carouselList: []
        };
    },
    computed: {
        lang() {
            return this.$store.state.lang.language;
        }
    },
    watch: {
        lang() {
            this.setOptions();
        }
    },
    created() {
        this.setOptions();
    },
    methods: {
        setOptions() {
            this.carouselList = [
                {
                    id: this.$t('home.summaryCarouselList.id1'),
                    url: this.$t('home.summaryCarouselList.banner1')
                },
                {
                    id: this.$t('home.summaryCarouselList.id2'),
                    url: this.$t('home.summaryCarouselList.banner2')
                },
                {
                    id: this.$t('home.summaryCarouselList.id3'),
                    url: this.$t('home.summaryCarouselList.banner3')
                }
            ];
        }
    }
};
</script>

<style lang="scss" scoped>
.home__banner {
    position: relative;

    /deep/ .el-carousel__indicators--horizontal {
        bottom: 94px;

        .el-carousel__indicator {
            padding: 12px 6px !important;
            button {
                width: 60px;
                height: 4px;
                opacity: 0.4;
            }

            &.is-active {
                button {
                    background-color: $app-primary-color;
                    opacity: 1;
                }
            }
        }
    }

    &-label {
        z-index: 100;
        position: absolute;
        top: 280px;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: center;

        &-main {
            color: #fff;
            margin-right: 449px;
            .title {
                font-size: 58px;
                font-weight: bold;
                margin-bottom: 29px;
                width: 749px;
                height: 56px;
                line-height: 56px;
            }

            .content {
                font-size: 18px;
                margin-bottom: 68px;
                width: 568px;
            }
            button {
                padding: 20px 68px;
                font-size: 16px;
            }
        }
    }
}
</style>
