<script lang="ts" setup>
import { axios } from '../server';
const res = await axios('../../public/data.json');
console.log(res);

</script>

<template>
<div>
  <ul>
    <li v-for="(item,index) in res" :key="index">
      {{item.name}}
    </li>
  </ul>
</div>
</template>

<style lang="less" scoped>
</style>