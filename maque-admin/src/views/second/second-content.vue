

<template>
  第二页内容 :{{ id1}}
</template>


<script setup lang="ts">
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";

const route = useRoute()


const id1 = ref("");

onMounted(() => {
  id1.value = route.params.id;
})
</script>

<style scoped>

</style>