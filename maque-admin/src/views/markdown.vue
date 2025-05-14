<template>

   Markdown预览：<br/>
  <v-md-preview :text="html"></v-md-preview>


  Markdown编辑：<br/>
  <v-md-editor  left-toolbar="h|bold|ul|ol|image" v-model="html" height="100%"></v-md-editor>
</template>

<script setup lang="ts">

import {ref} from "vue";

const html = ref("# 标题1 \n 我是markdown内容")

</script>


<style scoped>

</style>