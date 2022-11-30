<template>
  <h1>这是主页{{ sonMsg }}</h1>
  <ShopChart ref="shopChartRef" @send-father="getMsg" :msg="msg" />
</template>
  
<script setup lang='ts'>
import { ref, shallowRef } from 'vue';
import ShopChart from '../components/ShopChart.vue'
const msg: string = "我是你爸爸";
let sonMsg = ref<string>('');
const getMsg = (val: string) => {
  sonMsg.value = val;
}
const shopChartRef = ref<InstanceType<typeof ShopChart>>();
console.log(shopChartRef.value?.name);

</script>
  
<style>

</style>