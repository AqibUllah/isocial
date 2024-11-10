<script setup lang="ts">
  interface iconProps {
    icon:string,
    scale:string,
    transparent?:boolean
  }
  const props = defineProps<iconProps>()
</script>

<template>
  <button class="rounded-3xl p-1 my-0 flex text-center justify-center hover:bg-indigo-300/25 transition"
          :class="{'bg-indigo-300/50' : !props.transparent}"
  >
    <v-icon :name="props.icon" :scale="props.scale"></v-icon>
  </button>
</template>

<style scoped>

</style>