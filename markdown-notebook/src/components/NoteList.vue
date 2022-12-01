<template>
  <div class="note-list">
    <div class="operate-btn">
      <el-button type="primary" plain>添加笔记</el-button>
      <el-button type="danger" plain @click="deletNote">删除笔记</el-button>
    </div>
    <div @click="deletNote">aaaa</div>
  </div>
</template>
  
<script setup lang='ts'>
import http from '../utils/http';
import { ElMessage, ElMessageBox } from 'element-plus';
// let res = http.get('/').then(response => {
//   console.log(response.data);
// })
const deletNote = () => {
  ElMessageBox.confirm(
    '你确定要删除这一篇笔记吗?',
    'Warning',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(() => {
      ElMessage({
        type: 'success',
        message: '删除成功',
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '删除取消',
      })
    })
}
</script>
  
<style scoped lang="less">
.note-list {
  width: 300px;
  padding: 10px;
  .operate-btn{
    display: flex;
    justify-content: space-around;
  }
}
</style>