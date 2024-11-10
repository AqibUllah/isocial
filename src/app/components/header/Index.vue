<script setup lang="ts">
import './header';
import Avatar from "@/core/ui/Avatar.vue";

</script>
<template>
  <header class="flex justify-between items-center pt-3 pb-5">
    <div class="flex gap-4 items-center">
      <v-icon name="bi-facebook" scale="2"></v-icon>
      <div class="flex items-center gap-3">
      <div class="divide-y divide-gray-400  h-[20px] w-[1px] bg-gray-900"></div>
      <v-icon name="bi-search" scale="1"></v-icon>
      <input type="text" name="search" id="search" class="bg-transparent block w-full rounded-md border-none ring-0 focus:outline-none sm:text-sm sm:leading-6" placeholder="search">
      <button class="focus:bg-gray-200 rounded-full p-1 hover:bg-gray-200">
        <v-icon name="bi-mic" scale="1"></v-icon>
      </button>
      </div>
    </div>
    <div class="middle flex gap-5 items-center">
      <button class="bg-opacity-25 bg-indigo-400 px-5 py-1 rounded-lg transition">
        <v-icon name="bi-house" scale="1.5"></v-icon>
      </button>
      <button class="hover:bg-opacity-25 hover:bg-indigo-400 px-5 py-1 rounded-lg transition">
        <v-icon name="bi-tv" scale="1.5"></v-icon>
      </button>
      <button class="hover:bg-opacity-25 hover:bg-indigo-400 px-5 py-1 rounded-lg transition">
        <v-icon name="pr-users" scale="1.5"></v-icon>
      </button>
      <button class="hover:bg-opacity-25 hover:bg-indigo-400 px-5 py-1 rounded-lg transition">
        <v-icon name="bi-basket" scale="1.5"></v-icon>
      </button>
    </div>
    <div class="flex items-center gap-5">
      <button class="">
        <v-icon name="la-facebook-messenger" scale="1.5"></v-icon>
      </button>
      <button>
        <v-icon name="bi-bell" scale="1.5"></v-icon>
      </button>
      <button>
        <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
      </button>
    </div>
  </header>

</template>

<style scoped>@import "header.scss";</style>