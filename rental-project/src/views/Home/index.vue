<template>
  <div>
    hello,主页
    <div class="text">
      遗憾总会有，心酸难受或者泪流，毕竟爱了很久
    </div>
    <el-button type="primary" @click="getView">按钮</el-button>
    <br/>
    <span>{{imgInfo.title}}</span>
    <span>{{imgInfo.date}}</span>
    <img :src="imgInfo.url" alt="">
  </div>
</template>
  
<script setup lang='ts'>
import { ref, reactive } from 'vue';
import { getRandomView } from '../../api'
interface ImgInfo {
  date?: number,
  title?: string,
  url: string
}
let imgInfo = reactive<ImgInfo>({
  url: '',
  title: '',
})

const getView = async () => {
  await getRandomView().then(res => {
    console.log(res);
    if ((res as any)?.success) {
      imgInfo.url = (res as any).data.url;
      imgInfo.title = (res as any).data.title;
      imgInfo.date = (res as any).data.date;
      console.log(imgInfo);
    }
  });
  // console.log(data);
  // if (data?.state === 200) {
  //   imgUrl.value = data.imgurl;
  // } else {
  //   imgUrl.value = 'https://img.tukuppt.com/png_preview/00/41/75/QIQbaw6Vr7.jpg!/fw/780';
  // }
}

</script>
  
<style lang="scss" scoped>
@import '@/assets/scss/Home/home.scss';
</style>