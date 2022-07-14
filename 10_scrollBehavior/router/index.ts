import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

declare module 'vue-router' {
    interface RouteMeta {
        title: string,
        transition: string
    }
}

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        component: () => import("@/views/Login.vue"),
        meta: {
            title: '登录页面',
            transition: 'animate__fadeIn'
        }
    },
    {
        path: "/index",
        component: () => import("@/views/Index.vue"),
        meta: {
            title: '首页！！！',
            transition: 'animate__bounceIn'
        }
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    scrollBehavior: (to, from, savePosition) => {
        console.log(savePosition)
        // if (savePosition) {
        //     return savePosition
        // } else {
        //     return {
        //         top: 0
        //     }
        // }
        // return {
        //     top: 100
        // }
        return new Promise((r) => {
            setTimeout(() => {
                r({
                    top: 1200
                })
            }, 2000)
        })
    },
    routes,
});

export default router