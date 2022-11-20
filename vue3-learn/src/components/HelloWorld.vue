<script setup lang="ts">
import { reactive, ref, shallowRef } from 'vue'

defineProps<{ msg: string }>()
type Obj = {
  name: string
}
const count = ref<number>(0);
// const msg1 = ref("start");
let info = shallowRef<Obj>({
  name: 'Aibo'
})
let arr = reactive<string[]>(['a', 'b', 'c', 'd']);
arr.splice(2, 0, 'e');
const parent = () => {
  console.log("I'm parent");
}
const child = () => {
  console.log("I'm child");
  arr.splice(2, 0, 'f');
  info.value.name = 'kulibo';
  info.value = { 'name': 'kulibo' };
  emit('on-click', 'I love you forever');
}
const emit = defineEmits(['on-click']);
</script>

<template>
  <h1>{{ msg }}</h1>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
  <div @click="parent">
    <div @click.stop="child">按钮</div>
  </div>
  <div>
    <div :key="item" v-for="item in arr">{{ item }}</div>
  </div>
</template>

<style scoped>
</style>
