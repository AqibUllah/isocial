<script setup lang="ts">
  import {ref} from "vue";
  import Card from "@/app/components/Card.vue"
  import IconButton from "@ui/IconButton.vue"
  import Avatar from "@/core/ui/Avatar.vue";
  const contacts = ref([
    {
      img:'https://blog.photofeeler.com/wp-content/uploads/2017/12/linkedin-profile-picture.jpg',
      name:'Noman khan',
      status:true
    },
    {
      img:'https://blog.photofeeler.com/wp-content/uploads/2017/12/linkedin-profile-picture.jpg',
      name:'Imran Ali',
      status:false
    },
    {
      img:'https://blog.photofeeler.com/wp-content/uploads/2017/12/linkedin-profile-picture.jpg',
      name:'Noor khan',
      status:true
    },
    {
      img:'https://blog.photofeeler.com/wp-content/uploads/2017/12/linkedin-profile-picture.jpg',
      name:'Waqar Zaman',
      status:false
    },
    {
      img:'https://blog.photofeeler.com/wp-content/uploads/2017/12/linkedin-profile-picture.jpg',
      name:'Yousaf Khan',
      status:true
    },
    {
      img:'https://blog.photofeeler.com/wp-content/uploads/2017/12/linkedin-profile-picture.jpg',
      name:'Umar Shareef',
      status:false
    },
    {
      img:'https://blog.photofeeler.com/wp-content/uploads/2017/12/linkedin-profile-picture.jpg',
      name:'Bilal Khan',
      status:false
    },
    {
      img:'https://blog.photofeeler.com/wp-content/uploads/2017/12/linkedin-profile-picture.jpg',
      name:'Hamza Sami',
      status:true
    },
  ])
</script>

<template>
  <Card class="mt-5">
    <template v-slot:header>
      <div class="flex items-center justify-between">
        <span class="font-bold text-sm">Contacts</span>
        <ul class="flex items-center gap-2">
          <IconButton icon="bi-camera-video-fill" scale=".8"></IconButton>
          <IconButton icon="bi-search" scale=".8"></IconButton>
          <IconButton icon="bi-three-dots" scale=".8"></IconButton>
        </ul>
      </div>
    </template>
    <template v-slot:body>
      <ul class="flex flex-col items-start justify-center gap-4">
        <li v-for="(item,i) in contacts" :key="i" class="flex items-center gap-2">
          <div class="relative">
            <Avatar :src="item.img" />
            <span class="absolute right-0 bottom-1 flex h-1 w-1" v-if="item.status">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-1 w-1 bg-green-500"></span>
            </span>
            <div v-if="!item.status" class="absolute bg-gray-400 rounded-full h-2 w-2 right-0 bottom-0"></div>
          </div>
          <span class="font-bold text-xs">{{ item.name }}</span>
        </li>
      </ul>
    </template>
  </Card>
</template>

<style scoped>

</style>