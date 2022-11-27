<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import ShopChart from './components/ShopChart.vue'
</script>

<template>
  <ShopChart />
  <!-- <router-view></router-view> -->
  <router-link to="/">登录</router-link>
  <router-link to="/main">主页</router-link>
  <router-view></router-view>
</template>

<style scoped>
</style>
