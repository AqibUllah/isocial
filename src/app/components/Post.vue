<script setup lang="ts">

import Card from "@/app/components/Card.vue";
import Avatar from "@/core/ui/Avatar.vue";
import IconButton from "@/core/ui/IconButton.vue";
import CommentBox from "@/app/components/CommentBox.vue";
import Components from "@/app/components/comments/index.vue";
</script>

<template>
  <Card>
    <template v-slot:header>
      <div class="flex items-center justify-between">

        <ul class="flex items-center gap-3">
          <li>
            <Avatar src="" />
          </li>
          <li>
          <p class="font-bold text-xs">Aqib Ullah</p>
          <p class="text-xs text-gray-300">2 min ago</p>
          </li>
        </ul>
        <IconButton icon="bi-three-dots" scale="1" />
      </div>
    </template>
    <template v-slot:body>
      <p class="text-xs text-gray-700">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <img src="https://cdn.wallpapersafari.com/62/89/Rw5BmC.jpg" class="rounded-md my-2 w-auto h-auto" alt="seen">
      <div class="flex items-center gap-5">
        <div class="flex items-center">
          <IconButton icon="bi-heart" transparent scale="1" />
          <span class="text-xs text-gray-700">5K</span>
        </div>
        <div class="flex items-center">
          <IconButton icon="bi-chat" transparent scale="1" />
          <span class="text-xs text-gray-700">5K</span>
        </div>
      </div>
      <div class="divide-x-2 my-5 divide-gray-800"></div>
      <hr class="h-px my-4 bg-gray-500 border-0">
      <CommentBox />
      <Components />
    </template>
  </Card>
</template>

<style scoped>

</style>