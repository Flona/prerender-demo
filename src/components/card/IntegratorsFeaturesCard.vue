<template>
    <ul class="cards">
        <li class="wow slideInUp" shadow="always" v-for="item in cards" :key="item.id">
            <img :src="item.img" />
            <p class="title">{{ item.title }}</p>
            <p class="content">{{ item.content }}</p>
        </li>
    </ul>
</template>

<script>
import icon from '@/assets/imgs/icon1.png';

export default {
    name: 'IntegratorsFeaturesCard',
    data() {
        return {
            cards: []
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
            this.cards = [
                {
                    id: 1,
                    img: icon,
                    title: this.$t('integrators.features.cards.title1'),
                    content: this.$t('integrators.features.cards.content1')
                },
                {
                    id: 2,
                    img: icon,
                    title: this.$t('integrators.features.cards.title2'),
                    content: this.$t('integrators.features.cards.content2')
                },
                {
                    id: 3,
                    img: icon,
                    title: this.$t('integrators.features.cards.title3'),
                    content: this.$t('integrators.features.cards.content3')
                },
                {
                    id: 4,
                    img: icon,
                    title: this.$t('integrators.features.cards.title4'),
                    content: this.$t('integrators.features.cards.content4')
                },
                {
                    id: 5,
                    img: icon,
                    title: this.$t('integrators.features.cards.title5'),
                    content: this.$t('integrators.features.cards.content5')
                },
                {
                    id: 6,
                    img: icon,
                    title: this.$t('integrators.features.cards.title6'),
                    content: this.$t('integrators.features.cards.content6')
                }
            ];
        }
    }
};
</script>

<style lang="scss" scoped>
ul {
    width: 1200px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    li {
        background-color: #fff;
        padding: 40px 40px 53px;
        margin-bottom: 30px;
        box-shadow: 0px 6px 57px 0px rgba(91, 129, 199, 0.2);
        img {
            height: 130px;
            object-fit: cover;
        }
        .title {
            font-size: 24px;
            font-weight: 500;
            color: $app-text-1-color;
            margin: 21px 0 31px;
            width: 299px;
        }

        .content {
            font-size: 16px;
            color: $app-text-6-color;
            padding: 31px 0 0;
            border-top: 1px solid $app-grey-19-color;
            width: 299px;
            line-height: 24px;
            text-align: start;
        }
    }
}
</style>
