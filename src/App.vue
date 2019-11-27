<template>
    <LayoutApp id="app">
        <template>
            <Header />
            <Main />
            <Footer v-show="!hiddenFooter" />
        </template>
    </LayoutApp>
</template>

<script>
import Header from '@/layout/header/index';
import Main from '@/layout/Main';
import Footer from '@/layout/Footer';
import LayoutApp from '@/layout/LayoutApp';

export default {
    name: 'App',

    components: {
        Header,
        Main,
        Footer,
        LayoutApp
    },
    computed: {
        alwaysLight() {
            return this.$route.meta.alwaysLight;
        },
        hiddenFooter() {
            return this.$route.meta.hiddenFooter;
        }
    },
    watch: {
        alwaysLight: {
            handler: function(newAlwaysLight) {
                this.changeTypeByTag(!newAlwaysLight);
            },
            immediate: true
        }
    },
    mounted() {
        window.onscroll = this.onScroll;
    },
    methods: {
        onScroll() {
            const h = document.scrollingElement.scrollTop;
            this.changeTypeByTag(h <= 50 && !this.alwaysLight);
        },
        changeTypeByTag(isDark) {
            let type = 'light';
            if (isDark) {
                type = 'dark';
            }
            this.$store.dispatch('menu/changeMenuStyleType', type);
        }
    }
};
</script>

<style lang="scss">
.app {
    display: flex;
    width: 100%;
    min-width: 1200px;
}
</style>
