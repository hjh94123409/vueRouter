import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(router)

const whiteList = ['/']

router.beforeEach((to, from, next) => {
    if (whiteList.includes(to.path) || localStorage.getItem('routerToken')) {
        next()
    } else {
        next('/')
    }

})

app.use(ElementPlus)

app.mount('#app')
