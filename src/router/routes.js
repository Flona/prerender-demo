'use strict';

export default [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home')
    },
    {
        path: '/theme',
        name: 'Theme',
        component: () => import('../views/Theme')
    },
    {
        path: '/usage',
        name: 'Usage',
        component: () => import('../views/Usage')
    },
    {
        path: '*',
        redirect: '/'
    }
];
