<template>
  <h1>这是登录页</h1>
  <h3>{{ Test.name }}---------{{ Test.current }}</h3>
  <button @click="change">按钮</button>
</template>

<script setup lang="ts">
import { useTestStore } from "../store";
import { ref } from "vue";
const Test = useTestStore();
const change = () => {
  Test.$patch({
    current: 1000,
    name: "艾博",
  });
};
</script>

<style></style>
