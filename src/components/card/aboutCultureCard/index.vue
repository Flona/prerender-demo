<template>
    <div class="culture-card">
        <Card
            :img="cards[0].img"
            :title="cards[0].title"
            :content="cards[0].content"
            :width="cards[0].width"
            :height="cards[0].height"
            :placement="cards[0].placement"
            :color1="cards[0].color1"
            :color2="cards[0].color2"
            class="wow slideInUp"
        />
        <div class="card-column">
            <Card :img="cards[1].img" :title="cards[1].title" :content="cards[1].content" class="wow slideInUp" />
            <Card
                :img="cards[2].img"
                :title="cards[2].title"
                :content="cards[2].content"
                :color1="cards[2].color1"
                :color2="cards[2].color2"
                class="wow slideInUp"
            />
        </div>
    </div>
</template>

<script>
import Card from './Card';
import culture from '@/assets/imgs/banner1.png';

export default {
    name: 'AboutCultureCard',
    components: {
        Card
    },
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
                    img: culture,
                    title: this.$t('about.intro.culture.cards.title1'),
                    content: this.$t('about.intro.culture.cards.content1'),
                    width: '595px',
                    height: '680px',
                    placement: 'bottom',
                    color1: 'rgba(175,135,117,1)',
                    color2: 'rgba(175,135,117,.97)'
                },
                {
                    id: 2,
                    img: culture,
                    title: this.$t('about.intro.culture.cards.title2'),
                    content: this.$t('about.intro.culture.cards.content2')
                },
                {
                    id: 3,
                    img: culture,
                    title: this.$t('about.intro.culture.cards.title3'),
                    content: this.$t('about.intro.culture.cards.content3'),
                    color1: 'rgba(58,90,93,1)',
                    color2: 'rgba(58,90,93,.97)'
                }
            ];
        }
    }
};
</script>

<style lang="scss" scoped>
.culture-card {
    width: 1200px;
    display: flex;
    justify-content: space-between;

    .card-column {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }
}
</style>
