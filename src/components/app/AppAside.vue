<template>
    <aside class="flex-grow-1" cls-name="aside">
        <div cls-name="brand">
            <svg-icon cls-name="brand__logo" name="logo"></svg-icon>
            <h1 cls-name="brand__name">prerender-demo</h1>
        </div>

        <nav cls-name="nav">
            <ul>
                <li cls-name="nav__item" v-for="nav in navList" :key="nav.name">
                    <router-link :to="nav.path" cls-name="nav__link">
                        <svg-icon cls-name="nav__icon" :name="nav.icon"></svg-icon>
                        <span cls-name="nav__name">{{ nav.name }}</span>
                    </router-link>
                </li>
            </ul>
        </nav>
    </aside>
</template>

<script>
export default {
    name: 'AppAside',

    data() {
        return {
            navList: [
                { name: '首页', path: '/home', icon: 'nav-home' },
                { name: '主题', path: '/theme', icon: 'nav-theme' },
                { name: '方法', path: '/usage', icon: 'nav-usage' }
            ]
        };
    }
};
</script>

<style module lang="scss">
@import '../../styles/variables';

.aside {
    width: $app-aside-width;
    background: $app-grey-3-color;
}

.brand {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: $app-offset-small 0;

    &__logo {
        width: 40px;
        height: 40px;
    }

    &__name {
        line-height: 20px;
        font-size: 16px;
        color: #fff;
        border-left: 1px solid currentColor;
        padding-left: $app-offset-small;
        margin-left: $app-offset-small;
        font-weight: 500;
    }
}

.nav {
    &__item {
        margin-bottom: $app-offset-small;
        padding: 0 $app-offset-xsmall;
    }

    &__link {
        display: block;
        line-height: 44px;
        color: #fff;
        padding: 0 $app-offset-xsmall;
        border-radius: 4px;
        font-size: 14px;

        &:hover {
            background: $app-grey-2-color;
            color: #fff;
        }

        &:global(.router-link-active) {
            background: $app-primary-color;
        }
    }

    &__icon {
        width: 20px;
        height: 20px;
        vertical-align: middle;
    }

    &__name {
        margin-left: $app-offset-small;
    }
}
</style>
