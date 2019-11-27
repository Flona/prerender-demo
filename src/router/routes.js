'use strict';

import About from '@/views/about';

export default [
    {
        path: '',
        name: 'Home',
        component: () => import('../views/Home'),
        meta: { title: 'Home' }
        // hidden: true
    },
    {
        path: '/integrators',
        name: 'Integrators',
        component: () => import(/* webpackChunkName: "integrators" */ '@/views/Integrators'),
        meta: { title: 'Integrators', isNew: true }
    },
    {
        path: '/about',
        name: 'About',
        component: About,
        meta: { title: 'About' },
        children: [
            {
                path: 'intro',
                component: () => import(/* webpackChunkName: "intro" */ '@/views/about/Intro'),
                meta: { title: 'Intro' }
            },
            {
                path: 'join',
                component: () => import(/* webpackChunkName: "join" */ '@/views/about/Join'),
                meta: { title: 'Join', alwaysLight: true, hiddenFooter: true }
            }
        ]
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import(/* webpackChunkName: "contact" */ '@/views/about/Contact'),
        meta: { title: 'Contact' }
    },
    {
        path: '*',
        redirect: '/'
    }
];
