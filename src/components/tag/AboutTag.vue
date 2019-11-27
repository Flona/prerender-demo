<template>
    <ul class="tags wow slideInUp">
        <li v-for="item in tags" :key="item.id" class="tag">
            <p class="title">
                <countTo
                    ref="countTo"
                    v-if="item.endVal"
                    :startVal="item.startVal"
                    :endVal="item.endVal"
                    :duration="5000"
                    :autoplay="false"
                ></countTo>
                {{ item.title }}
            </p>
            <p class="des">{{ item.des }}</p>
        </li>
    </ul>
</template>

<script>
import countTo from 'vue-count-to';
import remoteLoad from '@/utils/remoteLoad.js';

export default {
    name: 'AboutTag',
    components: {
        countTo
    },
    data() {
        return {
            tags: [],
            peopleNumber: 0,
            isInitial: true
        };
    },
    computed: {
        lang() {
            return this.$store.state.lang.language;
        },
        animatedNumber: function() {
            return this.peopleNumber.toFixed(0);
        }
    },
    watch: {
        lang() {
            this.setOptions();
        }
    },
    async created() {
        this.setOptions();
        this.$nextTick(() => {
            this.wowInit();
        });
    },
    methods: {
        setOptions() {
            this.tags = [
                {
                    id: 1,
                    title: this.$t('about.intro.understand.tags.title1'),
                    des: this.$t('about.intro.understand.tags.des1')
                },
                {
                    id: 2,
                    title: this.$t('about.intro.understand.tags.title2'),
                    des: this.$t('about.intro.understand.tags.des2'),
                    startVal: 0,
                    endVal: 100
                },
                {
                    id: 3,
                    title: this.$t('about.intro.understand.tags.title3'),
                    des: this.$t('about.intro.understand.tags.des3'),
                    startVal: 0,
                    endVal: 300
                }
            ];
        },
        wowInit() {
            new this.$wow.WOW({
                live: false,
                callback: () => {
                    if (!this.isInitial) {
                        return;
                    }
                    const countTos = this.$refs.countTo;
                    countTos.forEach(co => {
                        co.start();
                    });
                    this.isInitial = false;
                }
            }).init();
        }
    }
};
</script>

<style lang="scss" scoped>
.tags {
    display: flex;
    justify-content: center;

    .tag {
        width: 259px;
        border-left: 2px solid $app-grey-10-color;
        font-weight: 500;
        text-align: center;

        &:first-child {
            border: none;
        }

        .title {
            font-size: 42px;
            margin-bottom: 25px;
        }

        .des {
            font-size: 16px;
        }
    }
}
</style>
