<script setup lang="ts">
import { ref } from "vue"
  const pages = ref([
    {
      title:'Pages',
      img:'@asset/paper.png'
    }
  ])

</script>

<template>
  <div class="flex gap-3  items-center mt-2" v-for="item in pages" :key="item.title">
    <img class="h-9 w-9" :src="item.img" alt="">
    <span class="font-bold text-sm">{{ item.title }}</span>
  </div>
</template>

<style scoped>

</style>