import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

declare module 'vue-router' {
    interface RouteMeta {
        title: string
    }
}

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        component: () => import("@/views/Login.vue"),
        meta: {
            title: '登录页面'
        }
    },
    {
        path: "/index",
        component: () => import("@/views/Index.vue"),
        meta: {
            title: '首页！！！'
        }
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router