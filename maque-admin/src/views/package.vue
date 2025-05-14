<template>
  自定义组件测试：

  <mq-component title="abc" @click="showClick"></mq-component>
  <hr>
  <mq-component2 title="abc2" @click="showClick2"></mq-component2>
</template>

<script setup lang="ts">

import {ElMessage} from "element-plus";
import {MqComponent, MqComponent2} from "maque-packages"

function showClick(data: any) {
  ElMessage.success("点击了1:" + data)
}

function showClick2(data: any) {
  ElMessage.success("点击了2:" + data)
}

</script>

<style scoped>

</style>