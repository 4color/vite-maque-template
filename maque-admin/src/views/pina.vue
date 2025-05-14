<template>
  Stroe数据：{{ store.conf }}

  <div>
    修改Store数据：
    <el-button @click="edit">修改</el-button>

    <el-button @click="clear">清空</el-button>
  </div>
</template>


<script setup lang="ts">
import {useSystem} from "../stores/System.ts";

const store = useSystem();

function edit() {
  store.setConf({title: '修改了标题'})
}

function clear() {
  store.setConf({})
}

</script>

<style scoped>

</style>