'use strict';

import Layout from '@/layout';

export const children = [
    {
        path: '',
        name: 'Home',
        component: () => import('../views/Home'),
        meta: { title: 'Home' },
        hidden: true
    },
    {
        path: '/theme',
        name: 'Theme',
        component: () => import('../views/Theme'),
        meta: { title: 'Theme' }
    },
    {
        path: '/usage',
        name: 'Usage',
        component: () => import('../views/Usage'),
        meta: { title: 'Usage' }
    }
    // {
    //     path: '/videoPlay',
    //     name: 'VideoPlay',
    //     component: () => import('../views/VideoPlay'),
    //     meta: { title: 'VideoPlay' }
    // }
];

export default [
    {
        path: '',
        name: 'Home',
        component: () => import('../views/Home'),
        meta: { title: 'Home' },
        hidden: true
    },
    {
        path: '/theme',
        name: 'Theme',
        component: () => import('../views/Theme'),
        meta: { title: 'Theme' }
    },
    {
        path: '/usage',
        name: 'Usage',
        component: () => import('../views/Usage'),
        meta: { title: 'Usage' }
    },
    {
        path: '/videoPlay',
        name: 'VideoPlay',
        component: () => import('../views/VideoPlay'),
        meta: { title: 'VideoPlay' }
    },
    {
        path: '*',
        redirect: '/'
    }
];
