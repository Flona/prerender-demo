<template>
    <aside>
        <div class="brand">
            <div class="brand__logo"></div>
            <h1 class="brand__name">scafold-ui</h1>
        </div>

        <nav class="nav">
            <ul>
                <li v-for="nav in navList" :key="nav.name">
                    <router-link :to="nav.path">
                        <i class="nav__icon"></i>
                        <span class="nav__name">{{ nav.name }}</span>
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
                { name: '应用主题', path: '/theme', icon: 'nav-theme' }
            ]
        };
    }
};
</script>

<style scoped lang="scss">
@import '../../scss/variables';

.brand {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: $app-offset-small 0;

    &__logo {
        width: 40px;
        height: 40px;
        background: $app-danger-color;
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
    li {
        margin-bottom: $app-offset-small;
        padding: 0 $app-offset-xsmall;
    }

    a {
        display: flex;
        align-items: center;
        width: 100%;
        line-height: 44px;
        color: #fff;
        padding: 0 $app-offset-xsmall;
        border-radius: 4px;

        &:hover {
            background: $app-grey-2-color;
        }

        &.router-link-active {
            background: $app-primary-color;
        }
    }

    &__icon {
        width: 20px;
        height: 20px;
        background: $app-danger-color;
    }

    &__name {
        margin-left: $app-offset-small;
    }
}
</style>
