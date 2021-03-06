import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        component: () => import("@/views/Login.vue"),
    },
    {
        path: "/index",
        component: () => import("@/views/Index.vue"),
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router