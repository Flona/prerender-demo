import './styles/reset.css';
import './styles/color.css';
import './styles/flex.css';
import './styles/offset.css';
import './styles/text.css';

import Vue from 'vue';
import Cookies from 'js-cookie';
import i18n from '@/lang';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import SvgIcon from './components/SvgIcon';
import cssModule from './mixins/css-module';
import element from './plugins/element';

Vue.component('svg-icon', SvgIcon);
Vue.mixin(cssModule());
Vue.use(element, {
    size: Cookies.get('size') || 'medium',
    i18n: (key, value) => i18n.t(key, value)
});
Vue.use(element());
Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
