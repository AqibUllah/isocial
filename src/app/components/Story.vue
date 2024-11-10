<script setup lang="ts">
  import Card from "@/app/components/Card.vue"
  interface storyProps {
    user:{
      name:string
    },
    img:string,
    total?:number
  }
  const props = defineProps<storyProps>()
</script>

<template>
  <div class="relative text-center">
      <div class="absolute text-xs font-bold bg-gray-100/25 text-gray-100 rounded-md p-2 right-2 top-2">+{{ props.total }}</div>
      <img :src="props.img" :alt="props.user.name" class="h-40 w-40 rounded-2xl">
      <span class="text-xs font-bold text-gray-700">{{ props.user.name }}</span>
  </div>
</template>

<style scoped>

</style>