<template>
    <div>我是列表页面</div>
    <table border="1" cellspacing="0">
        <thead>
            <tr>
                <th>品牌</th>
                <th>价格</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in data" :key="item.id">
                <td>{{ item.name }}</td>
                <td>{{ item.price }}</td>
                <td>
                    <button @click="toQuery(item)">query传参</button>
                    <button @click="toParams(item)">params传参</button>
                    <button @click="toParamsA(item)">动态路由传参</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { data } from "./list.json";

const router = useRouter();

type Item = {
    name: string;
    price: number;
    id: number;
};
const toQuery = (item: Item) => {
    router.push({
        path: "/register",
        query: item,
    });
};

const toParams = (item: Item) => {
  router.push({
    name: 'Register',
    params: item
  })
}

const toParamsA = (item: Item) => {
  router.push({
    name: 'Register',
    params: {
      hehele: item.id
    }
  })
}

</script>

<style lang="less" scoped>
table {
    tr {
        th {
            padding: 5px 10px;
        }
        td {
            padding: 5px 10px;
        }
    }
}
</style>
