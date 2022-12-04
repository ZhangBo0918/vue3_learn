<script setup lang="ts">
</script>

<template>
  <RouterLink to="/"><el-button type="primary">按钮一</el-button></RouterLink>
  <span style="display: inline-block;width: 20px;"></span>
  <router-link to="/mine"><el-button type="danger">按钮二</el-button></router-link>
  <RouterView></RouterView>
</template>

<style scoped>
</style>
