<template>
  <div class="nav">
    <h1>to 方式</h1>
    <router-link to="/">Login</router-link>
    <router-link to="/register">Register</router-link>
    <h1>name 方式</h1>
    <router-link :to="{name: 'Login'}">Login</router-link>
    <router-link :to="{name: 'Register'}">Register</router-link>
    <h1>不留历史记录方式需要加replace</h1>
    <router-link replace to="/">Login</router-link>
    <router-link replace to="/register">Register</router-link>
    <hr>
    <h1>编程式导航 路径方式</h1>
    <button @click="toPage('/')">Login</button>
    <button @click="toPage('/register')">Register</button>
    <h1>编程式导航 name 方式</h1>
    <button @click="toPageName('Login')">Login</button>
    <button @click="toPageName('Register')">Register</button>
    <h1>next prev</h1>
    <button @click="next">next</button>
    <button @click="prev">prev</button>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const toPage = (url: string) => {
  //字符串跳转方式
  // router.push(url)
  //对象形式
  router.push({
    path: url
  })  
  //不留历史记录
  // router.replace({
  //   path: url
  // })
}
const toPageName = (name: string) => {
//命名式
  router.push({
    name: name
  })
}

const next = () => {
  router.go(1)
}

const prev = () => {
  router.back()
}
</script>

<style lang="less">
  .nav{
    a{
      margin: 0 10px;
      font-size: 18px;
      &:link{
        color: blue;
      }
      &:visited{
        color: blue;
      }
      &:hover{
        color: lightblue;
      }
      // &:active{
      //   color: lightgray;
      // }
    }
  }
</style>