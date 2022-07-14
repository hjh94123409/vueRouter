import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        component: () => import("../components/Root.vue"),
        children: [
            {
                path: '/user1',
                components: {
                    default: () => import('../components/A.vue'),
                    bbb: () => import('../components/B.vue')
                }
            },
            {
                path: '/user2',
                components: {
                    bbb: () => import('../components/B.vue'),
                    ccc: () => import('../components/C.vue')
                }
            },
            {
                path: '/user3',
                components: {
                    aaa: () => import('../components/A.vue')
                }
            }
        ]
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router