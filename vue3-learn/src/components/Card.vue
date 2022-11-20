<script setup lang="ts">
type Props = {
  content: string
}
defineProps<Props>()

</script>

<template>
  <div class="card">
    <div class="card-header">
      <div>标题</div>
      <div>副标题</div>
    </div>
    <div v-if="content" class="card-content">
      {{ content }}
    </div>
  </div>
</template>

<style lang="less" scoped>
.card {
  position: absolute;
  width: 300px;
  height: 200px;
  margin: 100px auto;
  border: 1px solid #ccc;
  border-radius: 10px;
  &:hover{
    box-shadow: 0 0 15px #ccc;
  }
  &-content{
    padding: 10px;
  }
  &-header{
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
}
</style>