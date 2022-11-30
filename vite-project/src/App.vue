<script setup lang="ts">
</script>

<template>
  <router-link to="/">登录</router-link>
  <router-link to="/main">主页</router-link>
  <router-view></router-view>
</template>

<style lang="less" scoped>
a {
  display: inline-block;
  text-decoration: none;
  width: 70px;
  height: 30px;
  color: black;
  font-weight: bold;
  line-height: 30px;
  background-color: white;
  border-radius: 10px;
  &:nth-of-type(1){
    margin-right: 20px;
  }
  &:hover{
    background-color: aquamarine;
  }
}
</style>
