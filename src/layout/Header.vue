<template>
    <aside class="aside d-flex justify-center">
        <img :src="logo" alt="logo" class="logo" @click="toHome" />

        <ul class="nav d-flex">
            <li v-for="nav in children" :key="nav.name">
                <router-link :to="{ name: nav.name }" class="nav__link">
                    <span class="nav__name">{{ nav.name }}</span>
                </router-link>
            </li>
        </ul>
    </aside>
</template>

<script>
import logo from '@/assets/logo.png';

import { children } from '@/router/routes';

export default {
    name: 'Header',
    data() {
        return {
            logo
        };
    },
    computed: {
        children() {
            return children;
        }
    },
    methods: {
        toHome() {
            this.$router.push('/');
        }
    }
};
</script>

<style lang="scss" scoped>
.aside {
    position: sticky;
    top: 0;
    height: 80px;
    width: 100%;
    background: $menuLightBg;
    .logo {
        height: 60px;
        width: 60px;
    }

    .nav {
    }
}
</style>
