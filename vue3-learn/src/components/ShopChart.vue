<template>
  <div>
    <table style="width: 800px;" border="1">
      <thead>
        <tr>
          <th>名称</th>
          <th>数量</th>
          <th>价格</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data" :key="index">
          <td align="center">{{ item.name }}</td>
          <td align="center">
            <button @click="addAndSub(item, false)">-</button>
            {{ item.num }}
            <button @click="addAndSub(item, true)">+</button>
          </td>
          <td align="center">{{ item.num * item.price }}</td>
          <td align="center">
            <button @click="del(index)">删除</button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td align="center">总价:{{ $total }}</td>
        </tr>
      </tfoot>
    </table>
    <Card content="需要和维护油田"/>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref, watch, onMounted } from 'vue';
import Card from './Card.vue';
type Shop = {
  name: string,
  num: number,
  price: number,
}
let $total = ref<number>(0);
onMounted(() => {
  console.log('starting')
})
const data = reactive<Shop[]>([
  {
    name: '小米无线蓝牙耳机',
    num: 1,
    price: 329
  },
  {
    name: 'OPPO enco air2 pro蓝牙耳机',
    num: 1,
    price: 229,
  },
  {
    name: '红米显示器4a',
    num: 1,
    price: 799,
  },
  {
    name: '联想拯救者刃7000k',
    num: 1,
    price: 7299,
  }
]);
const addAndSub = (item: Shop, type: boolean = false): void => {
  if (item.num > 1 && !type) {
    item.num--;
  }
  if (item.num <= 99 && type) {
    item.num++;
  }
}
const del = (index: number) => {
  data.splice(index, 1);
}
$total = computed<number>(() => {
  return data.reduce((prev, next) => {
    return prev + (next.num * next.price)
  }, 0)
})
watch(data, (newVal, oldVal) => {
  console.log("新的值", newVal);
  console.log("旧的值", oldVal);
  
})
</script>

<style scoped>
</style>