<template>
    <div v-if="!item.hidden" class="menu-wrapper">
        <template
            v-if="
                hasOneShowingChild(item.children, item) &&
                    (!onlyOneChild.children || onlyOneChild.noShowingChildren) &&
                    !item.alwaysShow
            "
        >
            <app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
                <el-menu-item :index="resolvePath(onlyOneChild.path)">
                    <item
                        :icon="onlyOneChild.meta.icon || (item.meta && item.meta.icon)"
                        :title="generateTitle(onlyOneChild.meta.title)"
                    />

                    <PopBadge v-if="onlyOneChild.meta.isNew" />
                </el-menu-item>
            </app-link>
        </template>

        <el-submenu v-else :index="resolvePath(item.path)" :popper-class="popperClass">
            <template slot="title">
                <item v-if="item.meta" :icon="item.meta && item.meta.icon" :title="generateTitle(item.meta.title)" />
            </template>
            <sidebar-item
                v-for="child in item.children"
                :key="child.path"
                :is-nest="true"
                :item="child"
                :base-path="resolvePath(child.path)"
                class="nest-menu"
            />
        </el-submenu>
    </div>
</template>

<script>
import path from 'path';
import { mapState } from 'vuex';
import { isExternal } from '@/utils/validate';
import { generateTitle } from '@/utils/i18n';
import Item from './Item';
import AppLink from './Link';
import PopBadge from '@/components/PopBadge';

export default {
    name: 'SidebarItem',
    components: { Item, AppLink, PopBadge },
    props: {
        // route object
        item: {
            type: Object,
            required: true
        },
        isNest: {
            type: Boolean,
            default: false
        },
        basePath: {
            type: String,
            default: ''
        }
    },
    data() {
        this.onlyOneChild = null;
        return {};
    },
    computed: {
        ...mapState({
            styleType: state => state.menu.styleType
        }),
        popperClass() {
            return this.styleType === 'dark' && !this.$route.meta.alwaysLight ? 'dark' : 'light';
        }
    },
    methods: {
        hasOneShowingChild(children = [], parent) {
            const showingChildren = children.filter(item => {
                if (item.hidden) {
                    return false;
                } else {
                    // Temp set(will be used if only has one showing child)
                    this.onlyOneChild = item;
                    return true;
                }
            });

            // When there is only one child router, the child router is displayed by default
            if (showingChildren.length === 1) {
                return true;
            }

            // Show parent if there are no child router to display
            if (showingChildren.length === 0) {
                this.onlyOneChild = { ...parent, path: '', noShowingChildren: true };
                return true;
            }

            return false;
        },
        resolvePath(routePath) {
            if (isExternal(routePath)) {
                return routePath;
            }
            if (isExternal(this.basePath)) {
                return this.basePath;
            }
            return path.resolve(this.basePath, routePath);
        },
        generateTitle
    }
};
</script>

<style lang="scss" scoped>
.menu-wrapper {
    display: inline-block;
    outline: none;

    .el-submenu {
        /deep/ .el-submenu__title {
            padding: 0 25px;
            &:focus,
            &:hover {
                background: none !important;
            }
            i {
                display: none;
            }
        }
    }

    .el-menu-item {
        position: relative;
        padding: 0 25px;
        &:focus,
        &:hover {
            background: none !important;
        }
    }

    // 聚焦效果
    .el-submenu.is-active .el-submenu__title,
    .el-submenu__title:focus,
    .el-submenu__title:hover,
    .el-menu-item:focus,
    .el-menu-item:hover,
    .el-menu-item.is-active {
        span {
            padding-bottom: 12px;
            &:after {
                content: '';
                position: absolute;
                height: 2px;
                background: linear-gradient(to left, $menuFocus1 50%, $menuFocus2 51%);
                top: 85%;
                width: 30px;
                left: 50%;
                transform: translateX(-50%);
            }
        }
    }
}

// 次级菜单
.menu-wrapper.nest-menu {
    display: block;

    // 非一级菜单不选中
    /deep/ .el-menu-item {
        &:hover,
        &:focus,
        &.is-active {
            span {
                &:after {
                    display: none;
                }
            }
        }
    }
}
</style>
