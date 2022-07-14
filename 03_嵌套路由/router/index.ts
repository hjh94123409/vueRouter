import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: 'Footer',
        component: () => import("../components/Footer.vue"),
        children: [
            {
                path: "",
                name: 'Login',
                component: () => import("../components/Login.vue"),
            },
            {
                path: "register",
                name: 'Register',
                component: () => import("../components/Register.vue"),
            }
        ]
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router