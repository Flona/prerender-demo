'use strict';

import './theme.scss';
import Button from 'element-ui/lib/button';

export default function element() {
    return {
        install(Vue) {
            Vue.use(Button);
        }
    };
}
