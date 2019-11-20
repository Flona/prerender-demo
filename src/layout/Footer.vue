<template>
    <footer class="footer">
        <div class="footer__wrap">
            <div class="footer__wrap-top">
                <div class="footer__contact">
                    <div class="footer__contact-title">{{ $t('footer.contactTitle') }}</div>
                    <p class="footer__contact-phone">0571-88239832</p>
                    <p class="footer__contact-p">
                        <span class="footer__contact-name">{{ $t('footer.email') }}</span>
                        <span class="footer__contact-content">{{ $t('footer.emailContent') }}</span>
                    </p>
                    <p class="footer__contact-p">
                        <span class="footer__contact-name">{{ $t('footer.address') }}</span>
                        <span class="footer__contact-content">
                            {{ $t('footer.addressContent') }}
                        </span>
                    </p>
                    <p class="footer__contact-p">
                        <span class="footer__contact-name">{{ $t('footer.postCode') }}</span>
                        <span class="footer__contact-content">{{ $t('footer.postCodeContent') }}</span>
                    </p>
                </div>
                <div class="footer__route">
                    <div class="footer__route-wrap">
                        <div class="footer__route-item" v-for="(item, index) in routes" :key="index">
                            <div v-if="item.meta && item.meta.title">
                                <item :title="generateTitle(item.meta.title)" />
                                <ul>
                                    <li v-for="(subItem, index) in item.children" :key="index">
                                        <div
                                            v-if="!subItem.hidden"
                                            class="footer__route-subitem"
                                            @click="pushRouter(item.path, subItem.path)"
                                        >
                                            <item :title="generateTitle(subItem.meta.title)" />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer__wechat">
                    <div class="footer__wechat-wrap">
                        <div class="footer__wechat-title">{{ $t('footer.wechatTitle') }}</div>
                        <div class="footer__wechat-img"></div>
                    </div>
                </div>
            </div>
            <div class="footer__content">
                <div class="footer__content-img">
                    <img :src="$t('footer.footerLogo')" alt="footerLogo" />
                </div>
                <div class="footer__content-route">
                    <div
                        class="footer__content-route-item"
                        v-for="(item, index) in contentRouter"
                        @click="pushContentRouter(item.path)"
                        :key="index"
                    >
                        {{ $t('footer.' + item.title) }}
                    </div>
                </div>
                <div class="footer__content-text">
                    <span :class="lang === 'zh' ? 'footer__content-text-active' : ''" @click="handleCommand('zh')">
                        {{ $t('lang.zh') }}
                    </span>
                    /
                    <span :class="lang === 'en' ? 'footer__content-text-active' : ''" @click="handleCommand('en')">
                        {{ $t('lang.en') }}
                    </span>
                </div>
            </div>
            <div class="line"></div>
            <div class="footer__content-address">{{ $t('footer.networkCoding') }}</div>
        </div>
    </footer>
</template>

<script>
import Cookies from 'js-cookie';
import routes from '@/router/routes';
import { generateTitle } from '@/utils/i18n';
import Item from '@/layout/header/Item';
export default {
    name: 'LayoutFooter',
    components: { Item },
    data() {
        return {
            contentRouter: [
                {
                    title: 'intro',
                    path: '/about/intro'
                },
                {
                    title: 'contact',
                    path: '/contact/detail'
                },
                {
                    title: 'join',
                    path: '/about/join'
                },
                {
                    title: 'privacyPolicy',
                    path: '/path'
                },
                {
                    title: 'license',
                    path: '/path'
                }
            ]
        };
    },
    computed: {
        lang: {
            get() {
                return this.$store.state.lang.language;
            },
            set(lang) {
                this.$i18n.locale = lang;
                this.$store.dispatch('lang/setLanguage', lang);
            }
        },
        routes() {
            // footer 选用部分导航路由
            let configRoutes = ['/solution', '/product', '/integrators'];
            let mediaRoutes = {
                path: '/about',
                meta: { title: 'Media' },
                children: [
                    {
                        path: 'media/news',
                        meta: { title: 'News' }
                    },
                    {
                        path: 'media/memorabilia',
                        meta: { title: 'Memorabilia' }
                    }
                ]
            };
            let showRoutes = routes.filter(v => configRoutes.indexOf(v.path) > -1);
            showRoutes.push(mediaRoutes);
            return showRoutes;
        }
    },
    methods: {
        pushRouter(basePath, path) {
            this.$router.push({ path: `${basePath}/${path}` });
        },
        pushContentRouter(path) {
            if (path.indexOf('http') > -1) {
                window.open(path);
            }
            this.$router.push({ path });
        },
        handleCommand(lang) {
            this.$i18n.locale = lang;
            this.lang = lang;
            Cookies.set('language', lang);
        },
        generateTitle
    }
};
</script>

<style lang="scss" scoped>
.footer {
    width: 100%;
    background-color: $app-grey-1-color;
    font-family: Source Han Sans CN;
    color: rgba(245, 245, 247, 1);
    &__wrap {
        overflow: hidden;
        max-width: 1200px;
        margin: 0 auto;
        padding-top: 50px;
    }
    &__wrap-top {
        display: flex;
    }
    &__contact {
        font-weight: inherit;
        width: 420px;
    }
    &__contact-title {
        font-size: 18px;
    }
    &__contact-phone {
        font-weight: inherit;
        font-size: 22px;
        margin-top: 24px;
    }
    &__contact-p {
        display: flex;
        font-weight: 400;
        margin-top: 19px;
        width: 350px;
        color: rgba(159, 163, 166, 1);
        font-size: 12px;
    }
    &__contact-name {
        margin-right: 20px;
        display: inline-block;
    }
    &__contact-content {
        flex: 1;
        display: inline-block;
        margin-right: 20px;
    }
    &__route {
        width: 486px;
    }
    &__route-title {
        font-size: 14px;
        color: rgba(245, 245, 247, 1);
        line-height: 42px;
    }
    &__route-wrap {
        flex-wrap: wrap;
        text-align: justify;
        justify-content: space-between;
        overflow: hidden;
        display: flex;
    }
    &__route-item {
        font-size: 14px;
        font-weight: 400;
        color: rgba(245, 245, 247, 1);
        overflow: hidden;
        /*flex: 1;*/
    }
    &__route-subitem {
        cursor: pointer;
        margin-top: 19px;
        color: rgba(159, 163, 166, 1);
        font-size: 12px;
    }
    &__wechat {
        flex: 1;
    }
    &__wechat-wrap {
        float: right;
        overflow: hidden;
        padding: 0 10px 10px 10px;
        width: 150px;
        height: 176px;
        background: rgba(255, 255, 255, 1);
    }
    &__wechat-title {
        margin-top: 16px;
        padding-bottom: 4px;
        font-size: 14px;
        text-align: center;
        font-weight: 600;
        color: rgba(51, 51, 51, 1);
    }
    &__wechat-img {
        width: 130px;
        height: 130px;
        // background: url('../assets/imgs/wechat.png') center center no-repeat;
    }
    &__content {
        display: flex;
        margin-top: 70px;
    }
    &__content-route-item {
        cursor: pointer;
        vertical-align: middle;
        display: inline-block;
        margin-left: 23px;
        font-size: 12px;
        font-weight: 400;
        color: rgba(159, 163, 166, 1);
    }
    &__content-route {
        width: 500px;
    }
    &__content-img {
        margin-right: 32px;
        vertical-align: middle;
        display: inline-block;
        width: 128px;
        height: 24px;
        img {
            margin-top: -2px;
            display: inline-block;
            width: 100%;
            height: 100%;
        }
    }
    &__content-text {
        flex: 1;
        vertical-align: middle;
        display: inline-block;
        text-align: right;
        font-size: 12px;
        font-weight: 400;
        color: rgba(159, 163, 166, 1);
    }
    &__content-text-active {
        color: #ffffff;
    }
    &__content-address {
        padding: 14px 0 14px;
        text-align: center;
        font-size: 12px;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
    }
    .line {
        margin-top: 12px;
        width: 1200px;
        height: 1px;
        background: rgba(108, 112, 115, 1);
    }
}
</style>
