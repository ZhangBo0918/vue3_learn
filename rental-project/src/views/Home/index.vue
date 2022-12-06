<template>
  <div>
    hello,主页
    <div class="text">
      遗憾总会有，心酸难受或者泪流，毕竟爱了很久
    </div>
  </div>
</template>
  
<script setup lang='ts'>
import { ref, reactive } from 'vue';
interface ImgInfo {
  date?: number,
  title?: string,
  url: string
}
let imgInfo = reactive<ImgInfo>({
  url: '',
  title: '',
})

</script>
  
<style lang="scss" scoped>
@import '@/assets/scss/Home/home.scss';
</style>