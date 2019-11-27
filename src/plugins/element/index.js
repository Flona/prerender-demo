'use strict';

import './theme.scss';
import {
    Button,
    Menu,
    Submenu,
    MenuItem,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Carousel,
    CarouselItem,
    Image,
    Card,
    Collapse,
    CollapseItem,
    Option,
    Select
} from 'element-ui';

export default function element() {
    return {
        install(Vue) {
            Vue.use(Button);
            Vue.use(Menu);
            Vue.use(Submenu);
            Vue.use(MenuItem);
            Vue.use(Dropdown);
            Vue.use(DropdownMenu);
            Vue.use(DropdownItem);
            Vue.use(Carousel);
            Vue.use(CarouselItem);
            Vue.use(Image);
            Vue.use(Card);
            Vue.use(Collapse);
            Vue.use(CollapseItem);
            Vue.use(Option);
            Vue.use(Select);
        }
    };
}
