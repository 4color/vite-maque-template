<template>
  网络请求结果：
 {{ result}}
</template>


<script setup lang="ts">
import {onMounted, ref} from "vue";
import {ArticleApi} from "../api/article.api.ts";

const result = ref("")

onMounted(() => {

  ArticleApi.getArticleList().then(res => {
    result.value = JSON.stringify(res)
  })
})
</script>


<style scoped>

</style>