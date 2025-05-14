import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('../layout/admin-layout.vue'),
        redirect: '/index',
        children: [
            {
                path: '/index',
                name: 'Index',
                component: () => import('../views/index.vue')
            },
            {
                path: '/content',
                name: 'Content',
                component: () => import('../views/content.vue')
            },
            {
                path: '/network',
                name: 'Network',
                component: () => import('../views/network.vue')
            },
            {
                path: '/split',
                name: 'Split',
                component: () => import('../views/split.vue')
            },
            {
                path: '/markdown',
                name: 'Markdown',
                component: () => import('../views/markdown.vue')
            },
            {
                path: '/pina',
                name: 'Pina',
                component: () => import('../views/pina.vue')
            },
            {
                path: '/package',
                name: 'Package',
                component: () => import('../views/package.vue')
            }
        ]
    },
    {
        path: '/second',
        component: () => import('../layout/second-layout.vue'),
        redirect: '/second/index',
        children: [
            {
                path: '/second/index',
                name: 'SecondIndex',
                component: () => import('../views/second/index.vue')
            },
            {
                path: '/second/content/:id',
                name: 'SecondContent',
                component: () => import('../views/second/second-content.vue')
            },
            {
                path: '/second/var/:id',
                name: 'Var',
                component: () => import('../views/second/var.vue')
            }
        ]
    }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router