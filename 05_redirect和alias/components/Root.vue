<template>
    <div>
        <router-link to="/user1">/user1</router-link>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <router-link to="/user2">/user2</router-link>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <router-link to="/user3">/user3</router-link>
        <hr>
        <router-view></router-view>
        <router-view name="aaa"></router-view>
        <router-view name="bbb"></router-view>
        <router-view name="ccc"></router-view>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
</style>