<script setup lang="ts">
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
import { ref } from 'vue';
let locale = ref(zhCn);
let value1 = ref();
let value2 = ref();
let value4 = ref('');
let index = ref<number>(0);
const changLang = () => {
  index.value++;
  locale.value = (index.value) % 2 ? en : zhCn;
}
</script>

<template>
  <el-config-provider :locale="locale">
    <el-button type="primary" @click="changLang">按钮</el-button>
    <el-time-picker v-model="value1" placeholder="Arbitrary time" />
    <el-time-picker
      v-model="value2"
      arrow-control
      placeholder="Arbitrary time"
    />
    <el-date-picker
          v-model="value4"
          type="dates"
          placeholder="Pick one or more dates"
        />
    <RouterLink to="/"><el-button type="primary">按钮一</el-button></RouterLink>
    <span style="display: inline-block;width: 20px;"></span>
    <router-link to="/login"><el-button type="danger">按钮二</el-button></router-link>
    <RouterView></RouterView>
  </el-config-provider>
</template>

<style scoped>
.example-basic .el-date-editor {
  margin: 8px;
}
</style>
