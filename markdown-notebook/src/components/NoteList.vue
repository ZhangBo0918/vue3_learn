<template>
</template>
  
<script setup lang='ts'>
import http from '../utils/http';
let res = http.get('/').then(response => {
  console.log(response.data);
})
  
</script>
  
<style>
  
</style>