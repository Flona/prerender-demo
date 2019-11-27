<template>
    <ul class="integrators-tag">
        <li
            :class="['wow', 'slideInUp', lang]"
            data-wow-duration="0.5s"
            :data-wow-delay="`${index * 0.08}s`"
            v-for="(item, index) in tags"
            :key="item.id"
        >
            {{ item.content }}
        </li>
    </ul>
</template>

<script>
export default {
    name: 'IntegratorsTag',
    data() {
        return {
            tags: []
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
            this.tags = [
                {
                    id: 1,
                    content: this.$t('integrators.intro.tags.content1')
                },
                {
                    id: 2,
                    content: this.$t('integrators.intro.tags.content2')
                },
                {
                    id: 3,
                    content: this.$t('integrators.intro.tags.content3')
                },
                {
                    id: 4,
                    content: this.$t('integrators.intro.tags.content4')
                },
                {
                    id: 5,
                    content: this.$t('integrators.intro.tags.content5')
                }
            ];
        }
    }
};
</script>

<style lang="scss" scoped>
.integrators-tag {
    display: flex;
    justify-content: center;

    li {
        width: 126px;
        height: 126px;
        border-radius: 50%;
        background: linear-gradient(180deg, rgba(153, 216, 255, 1) 0%, rgba(54, 169, 241, 1) 100%);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 28px;
        margin: 0 36px;

        &.en {
            font-size: 20px;
        }
    }
}
</style>
