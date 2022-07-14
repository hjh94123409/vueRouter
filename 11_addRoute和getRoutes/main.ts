import { createApp, createVNode, render } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


const app = createApp(App)

app.use(router)

const whiteList = ['/']

//前置路由守卫
router.beforeEach((to, from, next) => {
    document.title = to.meta.title

    if (whiteList.includes(to.path) || localStorage.getItem('routerToken')) {
        next()
    } else {
        next('/')
    }

})
//后置路由守卫
router.afterEach((to, from) => {

})

app.use(ElementPlus)

app.mount('#app')
