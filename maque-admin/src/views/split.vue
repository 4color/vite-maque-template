<script setup lang="ts">
//@ts-ignore
import {Pane, Splitpanes} from 'splitpanes'
</script>

<template>
  <splitpanes class="default-theme">
    <Pane :min-size="15" :size="15">
      左边内容
      <div style="height: 400px">
        列表
      </div>
    </Pane>
    <Pane>
      右边内容
    </Pane>
  </splitpanes>
</template>

<style scoped>

</style>