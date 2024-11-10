<script setup lang="ts">

import Input from "@ui/Input.vue";
import IconButton from "@/core/ui/IconButton.vue";
import Avatar from "@/core/ui/Avatar.vue";
</script>

<template>
  <div class="flex items-center gap-2 my-2 relative">
    <Avatar src="" />
    <div class="relative w-full">
      <Input placeholder="Tell us what's new with you?" />
    </div>
      <IconButton icon="bi-send" class="px-1.5" scale="1"></IconButton>
  </div>
</template>

<style scoped>
.icons{
  background: rgba(255,255,255,.4);
}
</style>