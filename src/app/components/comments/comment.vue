<script setup lang="ts">

import IconButton from "@/core/ui/IconButton.vue";
import Input from "@/core/ui/Input.vue";
import Avatar from "@/core/ui/Avatar.vue";
import Card from "@/app/components/Card.vue";
</script>

<template>
    <div class="flex items-center gap-2 my-2 relative">
      <Avatar src="https://media.licdn.com/dms/image/D4D03AQH-Ekw26UxEXQ/profile-displayphoto-shrink_400_400/0/1664473702031?e=2147483647&v=beta&t=5Qq2TDrZnWqqiCheEE5VS2Yq-urM2oYM69p78oAH1M8" />
      <div class="block relative">
        <Card class="text-xs">
          <template v-slot:body>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.  versions of Lorem Ipsum.
          </template>
        </Card>
        <div class="flex gap-2">
          <button class="text-xs text-gray-600">Like</button>
          <button class="text-xs text-gray-600">Reply</button>
          <span class="text-xs text-gray-500">2m  ago</span>
          <span class="text-xs text-gray-500">15 likes</span>
        </div>
      </div>
      <IconButton icon="bi-three-dots" scale=".8"></IconButton>
    </div>
</template>

<style scoped>

</style>