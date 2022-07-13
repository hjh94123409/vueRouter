<template>
    <div><button @click="router.back()">返回</button>呵呵了，我是详情页</div>
    <h3>query接收参数</h3>
    <div>品牌：{{ route.query.name }}</div>
    <div>价格：{{ route.query.price }}</div>
    <div>ID：{{ route.query.id }}</div>
    <hr />
    <h3>params接收参数</h3>
    <p>刷新页面会丢失数据</p>
    <div>品牌：{{ route.params.name }}</div>
    <div>价格：{{ route.params.price }}</div>
    <div>ID：{{ route.params.id }}</div>
    <h3>动态路由接收参数</h3>
    <div>品牌：{{ newData?.name }}</div>
    <div>价格：{{ newData?.price }}</div>
    <div>ID：{{ newData?.id }}</div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { data } from "./list.json";

const route = useRoute();

const router = useRouter();

const newData = data.find(v => v.id === Number(route.params.hehele));
console.log(newData);
</script>

<style lang="less" scoped></style>
