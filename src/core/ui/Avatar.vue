<script setup lang="ts">
  interface inputProps {
    src:string
  }
  const props = defineProps<inputProps>()
</script>

<template>
  <img class="rounded-full h-8 w-8 ring-2 ring-white" :src="props.src || 'https://media.licdn.com/dms/image/D4D03AQH-Ekw26UxEXQ/profile-displayphoto-shrink_400_400/0/1664473702031?e=2147483647&v=beta&t=5Qq2TDrZnWqqiCheEE5VS2Yq-urM2oYM69p78oAH1M8'" alt="">
</template>

<style scoped>

</style>