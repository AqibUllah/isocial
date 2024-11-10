<script setup lang="ts">
  import IconButton from "@/core/ui/IconButton.vue";

  interface inputProps {
    placeholder:string
  }
  const props = defineProps<inputProps>()
</script>

<template>
    <input type="text" class="rounded-full bg w-full focus:outline-none  px-4 py-2 text-xs placeholder-gray-600 overflow-ellipsis" :placeholder="props.placeholder">
</template>

<style scoped>
  .bg{
    background: rgba(255,255,255,.2);
  }
</style>