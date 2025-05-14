<script setup lang="ts">
</script>

<template>

  <nav>
    <router-link to="/index">首页</router-link>
    |
    <router-link to="/content">内容页</router-link>
    |
    <router-link to="/second">第二个页</router-link>
    |
    <router-link to="/second/var/abc?name=张三">参数演示</router-link>
    |
    <router-link to="/network">网络请求</router-link>
    |
    <router-link to="/split">页面分割</router-link>
    |
    <router-link to="/markdown">Markdown</router-link>

    |
    <router-link to="/pina">Store数据</router-link>

    |
    <router-link to="/package">自定义组件</router-link>
  </nav>
  <hr>
  <router-view></router-view>
</template>

<style scoped>

</style>
