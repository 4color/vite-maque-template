<template>

  <el-button @click="backIndex">返回首页</el-button>
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="date" label="Date" width="180"/>
    <el-table-column prop="name" label="Name" width="180"/>
    <el-table-column prop="address" label="Address"/>

    <el-table-column label="操作">
      <template #default="scope">
        <el-button @click="detail(scope.row)">详情</el-button>
      </template>
    </el-table-column>
  </el-table>

</template>

<script lang="ts" setup>
import {useRouter} from "vue-router";

const router = useRouter()

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom1',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom2',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom3',
    address: 'No. 189, Grove St, Los Angeles',
  },
]

function backIndex() {
  router.push({path: '/'});
}

function detail(row: any) {
  router.push({name: "SecondContent", params: {id: row.name}});
}

</script>
