<template>
  <div>自定义组件2

    <div>父节点传过来的参数：{{ props.title }}</div>
    <button @click="showClick">事件响应</button>
  </div>
</template>


<script setup lang="ts">


defineOptions({
  name: "mq-component2"
})

const props = defineProps<{
  title: string;
}>();

const emits = defineEmits(['click'])


function showClick() {
  emits('click', "我是子组件的数据2")
}

</script>

<style scoped>

</style>