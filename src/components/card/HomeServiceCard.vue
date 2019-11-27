<template>
    <ul>
        <li
            v-for="(item, index) in cards"
            :key="item.id"
            class="cover-image wow slideInUp"
            data-wow-duration="0.5s"
            :data-wow-delay="`${index * 0.08}s`"
        >
            <img :src="item.img" />
            <p :class="[lang == 'en' ? 'en' : '']">{{ item.content }}</p>
        </li>
    </ul>
</template>

<script>
import service1 from '@/assets/imgs/demo2.png';
import service2 from '@/assets/imgs/demo2.png';
import service3 from '@/assets/imgs/demo2.png';
import service4 from '@/assets/imgs/demo2.png';
import service5 from '@/assets/imgs/demo2.png';

export default {
    name: 'HomeServiceCard',
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
                    img: service1,
                    content: this.$t('home.module2.cards.title1')
                },
                {
                    id: 2,
                    img: service2,
                    content: this.$t('home.module2.cards.title2')
                },
                {
                    id: 3,
                    img: service3,
                    content: this.$t('home.module2.cards.title3')
                },
                {
                    id: 4,
                    img: service4,
                    content: this.$t('home.module2.cards.title4')
                },
                {
                    id: 5,
                    img: service5,
                    content: this.$t('home.module2.cards.title5')
                }
            ];
        }
    }
};
</script>

<style lang="scss" scoped>
ul {
    margin-top: 39px;
    width: 1200px;
    display: flex;
    justify-content: space-between;

    li {
        position: relative;
        width: 236px;
        height: 420px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        font-size: 30px;
        color: #fff;
        background-color: $app-grey-5-color;

        img {
            position: absolute;
            top: 0;
            transition: all 1s;
            width: 100%;
            height: 100%;
            object-fit: cover;

            &:hover {
                transform: scale(1.2);
            }
        }

        p {
            width: 100%;
            background: rgba(0, 0, 0, 0.3);
            height: 75px;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2;

            &.en {
                font-size: 21px;
            }
        }
    }
}
</style>
