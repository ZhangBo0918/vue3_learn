<script setup lang="ts">
import { ref } from 'vue';
import SonPage from '../components/SonPage.vue';
const show = ref<boolean>(false)
</script>

<template>
  <button @click="show = !show">开关{{ show }}</button>
  <SonPage v-model="show"></SonPage>
</template>

<style>
</style>
