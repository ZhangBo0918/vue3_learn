<script setup lang="ts">
import { reactive } from 'vue'

const tableData = reactive([
  {
    product: '小米12',
    count: 1,
    price: 3999,
  },
  {
    product: '联想拯救者刃7000k主机',
    count: 1,
    price: 7299,
  },
  {
    product: '无线蓝牙耳机',
    count: 2,
    price: 229,
  }
])

interface FormInLine {
  [key: string]: string
}

const formInline:FormInLine = reactive({
  product: '',
  count: '',
  price: '',
})

const onSubmit = () => {
  let { product, price, count } = formInline
  let param = {
    product,
    count: Number(count),
    price: Number(price),
  }
  if (product.trim() && Number(count) > 0 && Number(price) > 0) {
    tableData.push(param)
  }
  Object.keys(formInline).forEach(key => {
    formInline[key] = ''
  })
}

const changeItem = (scope: any, type: 1 | 0 | -1) => {
  let dealFunc = {
    '1': () => { scope.row.count++ },
    '0': () => { scope.row.count-- },
    '-1': () => { tableData.splice(scope.$index, 1) },
  }
  dealFunc[type]()
}

</script>

<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="商品名">
        <el-input v-model="formInline.product" placeholder="请输入商品名" />
      </el-form-item>
      <el-form-item label="数量">
        <el-input v-model="formInline.count" placeholder="请输入商品数量" />
      </el-form-item>
      <el-form-item label="单价">
        <el-input v-model="formInline.price" placeholder="请输入商品单价" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">添加</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" stripe style="width: 100%;color: black;font-weight: bold;">
      <el-table-column prop="product" label="商品" />
      <el-table-column prop="count" label="数量" />
      <el-table-column prop="price" label="单价" />
      <el-table-column label="总价">
        <template #default="scope">
          {{ scope.row.count * scope.row.price }}
        </template>
      </el-table-column>
      <el-table-column label="操作" width="200">
        <template #default="scope">
          <el-button link type="primary" size="large" @click="changeItem(scope, 1)" :disabled="scope.row.count >= 10">增加
          </el-button>
          <el-button link type="primary" size="large" @click="changeItem(scope, 0)" :disabled="scope.row.count <= 1">减少
          </el-button>
          <el-button link type="danger" size="large" @click="changeItem(scope, -1)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<style scoped>

</style>
