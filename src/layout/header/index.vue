<template>
    <div :class="['header', styleType]">
        <div class="header__wrap">
            <img :src="logo" alt="logo" class="logo" @click="toHome" />

            <el-menu
                :default-active="activeMenu"
                :text-color="menuStyle.menuText"
                :active-text-color="menuStyle.menuActiveText"
                mode="horizontal"
                :class="styleType"
            >
                <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
            </el-menu>

            <Lang :class="['lang', styleType]" />
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import SidebarItem from './SidebarItem';
import Lang from './Lang';
import routes from '@/router/routes';
import variables from '@/styles/_variables.scss';
import logo from '@/assets/logo.png';

const style = {
    dark: {
        menuText: variables.menuDarkText,
        menuActiveText: variables.menuDarkActiveText
    },
    light: {
        menuText: variables.menuLightText,
        menuActiveText: variables.menuLightActiveText
    }
};

export default {
    name: 'LayoutHeader',
    components: { SidebarItem, Lang },
    data() {
        return {
            logo
        };
    },
    computed: {
        ...mapState({
            styleType: state => state.menu.styleType
        }),
        menuStyle() {
            return style[this.styleType];
        },
        activeMenu() {
            const route = this.$route;
            const { meta, path } = route;
            // if set path, the sidebar will highlight the path you set
            if (meta.activeMenu) {
                return meta.activeMenu;
            }
            return path;
        },
        variables() {
            return variables;
        },
        routes() {
            return routes;
        }
    },
    methods: {
        toHome() {
            this.$router.push('/home/summary');
        }
    }
};
</script>

<style lang="scss" scoped>
@keyframes lightToDark {
    from {
        background: $menuLightBg;
    }
    to {
        background: $menuDarkBg;
    }
}
@keyframes DarkToLight {
    from {
        background: $menuDarkBg;
    }
    to {
        background: $menuLightBg;
    }
}
.header {
    position: sticky;
    top: 0;
    width: 100%;
    min-width: 1200px;
    height: 80px;
    z-index: 1000;
    background-color: $menuDarkBg;
    &__wrap {
        justify-content: center;
        align-items: center;
        height: 80px;
        vertical-align: middle;
        display: flex;
        margin: 0 auto;
        width: 1200px;
        overflow: hidden;
    }
    &.light {
        border-bottom: 1px solid rgba(235, 235, 235, 1);
        animation: DarkToLight 0.5s;
        background-color: $menuLightBg;
    }
    &.dark {
        animation: lightToDark 0.5s;
        background-color: $menuDarkBg;
    }

    .logo,
    .lang,
    .el-menu {
        flex: none;
    }

    .logo {
        height: 28px;
        cursor: pointer;
    }

    .lang {
        &.light {
            color: $menuLightText;
        }
        &.dark {
            color: $menuDarkText;
        }
    }

    .el-menu {
        background: none;
        &.el-menu--horizontal {
            border-bottom: none !important;
            flex-grow: 2;
            margin-left: 27px;
        }
    }
}
</style>
