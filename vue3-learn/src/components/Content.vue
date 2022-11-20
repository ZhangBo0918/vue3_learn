<template>
  <div>
    <Suspense>
      <template #default>
        <AsyncComponent/>
      </template>
      <template #fallback>
        <div>loading...</div>
      </template>
    </Suspense>
  </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
const AsyncComponent = defineAsyncComponent(()=>import('../views/AsyncComponent.vue'))
</script>
<style lang="less" scoped>
</style>