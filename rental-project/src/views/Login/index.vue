<template>
  <el-form :inline="true" :model="loginInfo" class="demo-form-inline">
    <el-form-item label="用户名">
      <el-input v-model.trim="loginInfo.userName" placeholder="请输入用户名" />
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model.trim="loginInfo.password" placeholder="请输入密码" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="login">Query</el-button>
    </el-form-item>
  </el-form>
</template>
  
<script setup lang='ts'>
import { reactive } from 'vue';
import { getData } from '../../api';
import { useRouter } from 'vue-router';
const router = useRouter();
interface UserInfo {
  userName: string,
  password: string,
}
const loginInfo = reactive<UserInfo>({
  userName: '',
  password: '',
})
const login = async () => {
  let res = await getData(`user?userName=${loginInfo.userName}`, {});
  if ((res as Array<UserInfo>)[0]?.password === loginInfo.password) {
    router.push('/mine');
  }
}  
</script>
  
<style>

</style>