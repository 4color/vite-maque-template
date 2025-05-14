<template>

  <mq-component title="我是标题" @click="showClick"></mq-component>

</template>

<script setup lang="ts">
import MqComponent from "../../maque-packages/src/packages/mq-component/index"

function showClick(data: any) {
  alert(data);
}
</script>
