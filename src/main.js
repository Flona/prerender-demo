import './styles/reset.scss';
import './styles/color.scss';
import './styles/flex.scss';
import './styles/offset.scss';
import './styles/text.scss';
import 'animate.css';
import 'swiper/dist/css/swiper.min.css';

import Vue from 'vue';
import Cookies from 'js-cookie';
import i18n from '@/lang';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import SvgIcon from './components/SvgIcon';
import cssModule from './mixins/css-module';
import element from './plugins/element';
import wow from 'wowjs';

Vue.component('svg-icon', SvgIcon);
Vue.mixin(cssModule());
Vue.use(element, {
    size: Cookies.get('size') || 'medium',
    i18n: (key, value) => i18n.t(key, value)
});
Vue.use(element());
Vue.prototype.$wow = wow;

Vue.config.productionTip = false;

new Vue({
    i18n,
    router,
    store,
    render: h => h(App)
}).$mount('#app');
