<script setup lang="ts">
  interface cardProps {
    title?:string,
    transparent?:boolean
  }
  const props = defineProps<cardProps>()
</script>

<template>
  <div class="card min-h-auto p-2 rounded-md text-gray-700" :class="{'bg-gradient':!props.transparent,'bg-transparent':props.transparent}">
    <div class="card-header">
      <slot name="header"></slot>
    </div>
    <div class="card-body my-2 text-start">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .bg-gradient{
    //background: rgba(000,000,000,.1) !important;
    //background: rgb(238,174,202);
    background: radial-gradient(circle, rgba(238,174,202,.5) 0%, rgba(148,187,233,.3) 100%);
    //border-top: 1px double rgba(255,80,248,0.18);
    //border-right: 2px double rgba(255,80,248,0.1);
    //border-bottom: 1px double rgba(255,80,248,0.18);
    //border-left: 1px double rgba(255,80,248,0.27);
  }
</style>