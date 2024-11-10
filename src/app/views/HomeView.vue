<script setup lang="ts">
import Header from '@/app/components/header/Index.vue'
import EssentialPages from '@/app/components/essentials_pages/index.vue'
import EssentialGroups from '@/app/components/essentials_groups/index.vue'
import EssentialGames from '@/app/components/essentials_games/index.vue'
import EssentialExplores from '@/app/components/essentials_explore/index.vue'
import Card from "@/app/components/Card.vue"
import Stories from "@/app/components/Stories.vue"
import Contacts from "@/app/components/Contacts.vue"
import CreatePost from "@/app/components/CreatePost.vue";
import IconButton from "@/core/ui/IconButton.vue";
import Posts from "@/app/components/Posts.vue";
import Avatar from "@/core/ui/Avatar.vue";


</script>

<template>
  <Header></Header>
  <div class="flex justify-between">
    <Card class="min-w-[300px]">
      <template v-slot:body>
<!--        <div class="mx-3">-->
<!--          <span class="text-gray-600 text-sm">Pages</span>-->
<!--          <EssentialPages class="mb-3" />-->

<!--          <span class="text-gray-600 text-sm">Groups</span>-->
<!--          <EssentialGroups class="mb-3" />-->

<!--          <span class="text-gray-600 text-sm">Games</span>-->
<!--          <EssentialGames class="mb-3" />-->

<!--          <span class="text-gray-600 text-sm">Explore</span>-->
<!--          <EssentialExplores class="mb-3" />-->
<!--        </div>-->
<!--      </template>-->
<!--    </Card>-->


          <div class="flex text-center items-center gap-3 py-2">
            <img class="h-10 w-10" src="@asset/twenty-seven.png" alt="">
            <span class="font-bold text-sm">Events</span>
          </div>


          <div class="flex text-center items-center gap-3 py-2">
            <img class="h-10 w-10" src="@asset/heart.png" alt="">
            <span class="font-bold text-sm uppercase">covid-19:</span>
            <p class="text-xs capitalize">info center</p>
          </div>


          <div class="flex text-center items-center gap-3 py-2">
            <img class="h-10 w-10" src="@asset/watch.png" alt="">
            <span class="font-bold text-sm">Watch</span>
          </div>


            <div class="flex text-center items-center gap-3 py-2">
              <img class="h-10 w-10" src="@asset/clock.png" alt="">
              <span class="font-bold text-sm">Memories</span>
            </div>


            <div class="flex text-center items-center gap-3 py-2">
              <img class="h-10 w-10" src="@asset/computer-game.png" alt="">
              <span class="font-bold text-sm uppercase">Gaming Videos</span>
            </div>


            <div class="flex text-center items-center gap-3 py-2">
              <img class="h-10 w-10" src="@asset/add-user.png" alt="">
              <span class="font-bold text-sm uppercase">Friends</span>
            </div>

      </template>
    </Card>

    <main class="max-w-3xl overflow-y-auto max-h-[95vh]">
      <Stories></Stories>
      <div class="feeds mt-5">
        <div class="flex justify-between my-2">
          <h2 class="font-bold text-2xl flex items-center gap-2">Feeds <span class="text-gray-600 font-normal text-sm">(25 new)</span></h2>
        </div>
        <CreatePost />
        <Posts />
      </div>
    </main>

    <div>
      <Card>
        <template v-slot:header>
          <span class="font-extrabold text-xs">Birthdays</span>
        </template>
        <template v-slot:body>
          <div class="flex items-center gap-2">
            <Avatar src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" />
            <ul class="block text-xs">
              <li class="font-bold">Aqib Ullah</li>
              <li>celebration his birthday today</li>
            </ul>
          </div>
        </template>
      </Card>
      <Contacts></Contacts>
    </div>
  </div>
</template>


<style scoped>
.bg{
  background: rgba(255,255,255,.2);
}
.embla__container {
  display: flex;
}
.embla__slide {
  flex: 0 0 100%;
  min-width: 0;
}

</style>