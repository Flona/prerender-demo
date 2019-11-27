<template>
    <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
            <svg-icon :name="`lang-${lang}`" />
            <span>{{ title }}</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="zh">CN</el-dropdown-item>
            <el-dropdown-item command="en">EN</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>

<script>
import { getLanguage } from '@/lang';

export default {
    name: 'Lang',
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
        title() {
            return this.lang === 'en' ? 'EN' : 'CN';
        }
    },
    methods: {
        handleCommand(lang) {
            this.$i18n.locale = lang;
            this.lang = lang;
        }
    }
};
</script>

<style lang="scss" scoped>
.el-dropdown-link {
    cursor: pointer;
    outline: none;

    svg,
    span,
    i {
        vertical-align: middle;
    }

    svg {
        margin-right: 6px;
    }
}
</style>
