<script setup lang="ts">

import Input from "@ui/Input.vue";
import IconButton from "@/core/ui/IconButton.vue";
import Avatar from "@/core/ui/Avatar.vue";
</script>

<template>
  <div class="flex items-center gap-2 my-2">
    <Avatar src="https://media.licdn.com/dms/image/D4D03AQH-Ekw26UxEXQ/profile-displayphoto-shrink_400_400/0/1664473702031?e=2147483647&v=beta&t=5Qq2TDrZnWqqiCheEE5VS2Yq-urM2oYM69p78oAH1M8" />
    <div class="relative w-full">
      <Input placeholder="Tell us what's new with you?" />
      <div class="icons flex gap-x-[4px] absolute right-0 top-0 bottom-0 rounded-full px-1 py-1">
        <IconButton icon="bi-camera-video"  scale=".8"></IconButton>
        <IconButton icon="bi-camera"  scale=".8"></IconButton>
        <IconButton icon="bi-star"  scale=".8"></IconButton>
        <IconButton icon="bi-map"  scale=".8"></IconButton>
        <IconButton icon="bi-three-dots"  scale=".8"></IconButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
.icons{
  background: rgba(255,255,255,.4);
}
</style>