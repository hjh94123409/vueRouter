<template>
  <div>
      <router-view></router-view>
      <hr>
      <h1>我是父路由</h1>
      <div>
          <router-link to="/">Login</router-link>
          <router-link to="/register">Register</router-link>
      </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
  
</style>