<template>
    <div v-show="cooperations.length" class="cooperation-carousel">
        <swiper :options="swiperOption" ref="swiper" @mouseenter.native="showButton" @mouseleave.native="hiddenButton">
            <swiper-slide style="margin-top: 15px" v-for="item in cooperations" :key="item.id">
                <el-image :src="item.picture" fit="cover"></el-image>
            </swiper-slide>
            <div v-show="isHover" class="swiper-button-prev" slot="button-prev">
                <svg-icon name="icon-pre-cooperation" width="28px" height="28px"></svg-icon>
            </div>
            <div v-show="isHover" class="swiper-button-next" slot="button-next">
                <svg-icon name="icon-next-cooperation" width="28px" height="28px"></svg-icon>
            </div>
        </swiper>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import { getPartnerList } from '@/services/home';

export default {
    name: 'HomeCooperationCarousel',
    components: {
        swiper,
        swiperSlide
    },
    data() {
        return {
            swiperOption: {
                prevButton: '.swiper-button-prev',
                nextButton: '.swiper-button-next',
                slidesPerView: 5,
                slidesPerColumn: 2,
                spaceBetween: 30,
                slidesPerGroup: 10
            },
            cooperations: [],
            isHover: false
        };
    },
    created() {
        this.getPartnerList();
    },
    methods: {
        async getPartnerList() {
            let data = { list: [] };
            try {
                data = await getPartnerList();
            } finally {
                this.cooperations = data.list;
            }
        },
        showButton() {
            this.isHover = true;
        },
        hiddenButton() {
            this.isHover = false;
        }
    }
};
</script>

<style lang="scss" scoped>
.cooperation-carousel {
    margin: 44px 0 0;
    width: 1200px;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;

    .swiper-container {
        width: 100%;
        height: 309px;
        margin-left: auto;
        margin-right: auto;
    }
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
        width: 228px !important;
        height: 140px;
        display: flex;
        align-items: center;
        margin: 15px 0 0px 12px !important;

        .el-image {
            width: 228px;
            height: 138px;
            border: 1px solid $app-grey-13-color;
        }
    }
    .swiper-button-prev,
    .swiper-button-next {
        width: 52px;
        height: 52px;
        border-radius: 50%;
        background-image: none;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: $app-background-color5;

        &.swiper-button-disabled {
            visibility: hidden;
        }
    }
}
</style>
