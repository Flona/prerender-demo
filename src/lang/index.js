import Vue from 'vue';
import VueI18n from 'vue-i18n';
import Cookies from 'js-cookie';
import locale from 'element-ui/lib/locale';
import elementEnLocale from 'element-ui/lib/locale/lang/en';
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN';
import enLocale from './en/index';
import zhLocale from './zh/index';

Vue.use(VueI18n);

const messages = {
    en: {
        ...enLocale,
        ...elementEnLocale
    },
    zh: {
        ...zhLocale,
        ...elementZhLocale
    }
};
export function getLanguage() {
    const chooseLanguage = Cookies.get('language');
    if (chooseLanguage) return chooseLanguage;

    // if has not choose language
    const language = (navigator.language || navigator.browserLanguage).toLowerCase();
    const locales = Object.keys(messages);
    for (const locale of locales) {
        if (language.indexOf(locale) > -1) {
            return locale;
        }
    }
    return 'zh';
}
const i18n = new VueI18n({
    // set locale
    // options: en | zh
    locale: getLanguage(),
    // set locale messages
    messages
});

locale.i18n((key, value) => i18n.t(key, value));

export default i18n;
