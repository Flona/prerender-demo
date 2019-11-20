<template>
    <div class="layout" id="layout">
        <Header />
        <Main />
        <!-- <Footer /> -->
    </div>
</template>

<script>
// import Header from './header/index';
import Header from './Header';
// import Footer from './Footer';
import Main from './Main';
import throttle from '@/utils/throttle';
import { mainWidth } from '../theme/default';

export default {
    name: 'Layout',
    components: {
        Header,
        // Footer,
        Main
    },
    provide() {
        return {
            windowHeight: this.windowHeight,
            scrollTop: this.scrollTop,
            scrollHeight: this.scrollHeight,
            el: this.el
        };
    },
    data() {
        return {
            windowHeight: {
                value: 0
            },
            scrollTop: {
                value: 0
            },
            scrollHeight: {
                value: 0
            },
            el: {
                value: null
            }
        };
    },
    computed: {
        alwaysLight() {
            return this.$route.meta.alwaysLight;
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
        this.el.value = this.$refs.layout;
    },
    methods: {
        onScroll(e) {
            const scrollElement = document.scrollingElement;
            if (
                // 详情页与大事记页需要监听滑动属性
                this.$route.path.indexOf('/about/details') > -1 ||
                this.$route.path.indexOf('/about/media/memorabilia') > -1 ||
                this.$route.path.indexOf('/product/isysCore') > -1
            ) {
                this.windowHeight.value = scrollElement.clientHeight;
                this.scrollTop.value = scrollElement.scrollTop;
                this.scrollHeight.value = scrollElement.scrollHeight;
                this.el.value = scrollElement;
            }
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

<style lang="scss" scoped>
.layout {
    width: 100%;
}
</style>
