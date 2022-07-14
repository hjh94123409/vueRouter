import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        component: () => import("../components/Root.vue"),
        //字符串形式
        // redirect: '/user1',
        //对象形式
        // redirect: {
        //     path: '/user1'
        // },
        //回调函数形式
        // redirect: (to) => {
        //     // return '/user1'
        //     return {
        //         path: '/user1',
        //         query: {
        //             args: '呵呵了'
        //         }
        //     }
        // },
        //设置别名
        alias: ['/root', '/hehele'],
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