<template>

  <el-button @click="backIndex">返回首页</el-button>


  <div>
    query参数为：{{ route.query }}
  </div>

  <div>
    name参数：{{ name1 }}
  </div>

  <div>
    id参数：{{ id1 }}
  </div>
</template>

<script lang="ts" setup>
import {useRouter, useRoute} from "vue-router";
import {onMounted, ref} from "vue";

const router = useRouter()
const route = useRoute()


function backIndex() {
  router.push({path: '/'});
}

const name1 = ref("");
const id1 = ref("");

onMounted(() => {
  name1.value = route.query.name;
  id1.value = route.params.id;
})
</script>
