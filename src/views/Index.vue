<template>
    <div>
        <h1>我是首页</h1>
        <hr />
        <div class="wrap">
            <div
                class="nav"
                v-for="(item, index) in routerList"
                :key="item.path"
            >
                <router-link :to="item.path">
                    {{ item.path }}
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const routerList = router.getRoutes();
</script>

<style lang="less" scoped>
.wrap {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 300px;
}
.nav {
    border: 3px dashed #cce8cf;
    padding: 5px 10px;
    margin: 0 10px;
    a {
        text-decoration: none;
        color: blue;
    }
}
</style>
