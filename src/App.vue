<template>
    <LayoutApp id="app">
        <template>
            <LayoutHeader></LayoutHeader>
            <LayoutMain>
                <LayoutAside>
                    <AppAside></AppAside>
                </LayoutAside>
                <LayoutContainer>
                    <AppHeader></AppHeader>
                    <LayoutPrimary>
                        <router-view></router-view>
                    </LayoutPrimary>
                    <AppFooter></AppFooter>
                </LayoutContainer>
            </LayoutMain>
            <LayoutFooter></LayoutFooter>
        </template>
    </LayoutApp>
</template>

<script>
import { mapState } from 'vuex';
import LayoutApp from './components/layout/LayoutApp';
import LayoutHeader from './components/layout/LayoutHeader';
import LayoutMain from './components/layout/LayoutMain';
import LayoutFooter from './components/layout/LayoutFooter';
import LayoutAside from './components/layout/LayoutAside';
import LayoutContainer from './components/layout/LayoutContainer';
import LayoutPrimary from './components/layout/LayoutPrimary';
import AppAside from './components/app/AppAside';
import AppHeader from './components/app/AppHeader';
import AppFooter from './components/app/AppFooter';

export default {
    name: 'App',

    components: {
        LayoutApp,
        LayoutHeader,
        LayoutMain,
        LayoutFooter,
        LayoutAside,
        LayoutContainer,
        LayoutPrimary,
        AppAside,
        AppHeader,
        AppFooter
    },

    computed: {
        ...mapState(['userToken'])
    }
};
</script>
