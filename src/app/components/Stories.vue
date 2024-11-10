<script setup>
  import {ref} from "vue";
  import Store from "@/app/components/Story.vue"
  import Story from "@/app/components/Story.vue";
  import emblaCarouselVue from "embla-carousel-vue";
  import Autoplay from "embla-carousel-autoplay";
  import EmblaCarousel from 'embla-carousel'
  import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'

  // const embla = EmblaCarousel(emblaRoot, { loop: false }, [WheelGesturesPlugin()]) // Add plugin

  import {onMounted, watchEffect} from "vue";
  import IconButton from "@/core/ui/IconButton.vue";
  import Card from "@/app/components/Card.vue";


  // onMounted(() => {

  const [emblaRef,emblaApi] = emblaCarouselVue(
      {
        loop:true,
        breakpoints: {
          '(min-width: 768px)': { loop: true },
          '(min-width: 420px)': { loop: false } // This will override the (min-width: 768px) breakpoint loop option
        }
      },
      [Autoplay(),WheelGesturesPlugin(),
      ])
  watchEffect(() => {
    if (emblaApi.value) {
      console.log(emblaApi.value.slideNodes()) // Access API
    }
  })

  const previous = () => {
    emblaApi.scrollPrev()
  }
  const next = () => {
    emblaApi.scrollNext()
  }
  // })
  const stories = ref([
    {
      user: {
        name:'Alexandar'
      },
      img:'https://www.statushut.net/wp-content/uploads/2022/12/New-Sad-Whatsapp-Status-Lovely-Video-Download-Female-Version.jpg',
      total:10
    },
    {
      user: {
        name:'Noor'
      },
      img:'https://miro.medium.com/v2/resize:fit:720/0*fh8feoar3M_A3Rye.jpg',
      total:12
    },
    {
      user: {
        name:'Imran Khan'
      },
      img:'https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1472',
      total:3
    },
    {
      user: {
        name:'Kamran Khan'
      },
      img:'https://matildamagtree.files.wordpress.com/2018/03/dsc007491.jpg',
      total:8
    },
    {
      user: {
        name:'Ali'
      },
      img:'https://i.pinimg.com/736x/4f/57/4c/4f574c1b006265f241b6b61757d5f2de.jpg',
      total:7
    },
    {
      user: {
        name:'Imtiaz Ali'
      },
      img:'https://i.pinimg.com/1200x/77/7d/a6/777da634f2fa7fd43087b3cde5866477.jpg',
      total:10
    },
    {
      user: {
        name:'Yasir Shakoor'
      },
      img:'https://cf.bstatic.com/xdata/images/hotel/max1024x768/174363795.jpg?k=5690141fbfde94d79ea464576ec197f854359955bd1446e77a3508ff642b6e5f&o=&hp=1',
      total:2
    },
    {
      user: {
        name:'John'
      },
      img:'https://images-sp.summitpost.org/tr:e-sharpen,e-contrast-1,fit-max,q-60,h-800/103288.jpg',
      total:1
    }

  ])
</script>

<template>

  <div class="flex justify-between items-center">
    <h2 class="font-bold text-2xl flex items-center gap-2">stories <span class="text-gray-600 font-normal text-sm">(6/25)</span></h2>
    <div class="flex gap-1">
      <IconButton class="embla__prev" icon="bi-arrow-left-short" scale="1" @click="emblaApi.scrollPrev()"></IconButton>
      <IconButton class="embla__next" icon="bi-arrow-right-short" scale="1" @click="emblaApi.scrollNext()"></IconButton>
    </div>
  </div>
  <div class="flex items-center gap-2 relative">
    <div class="embla" ref="emblaRef">
      <div class="embla__container flex">
        <div class="relative embla__slide rounded-2xl mr-2">
          <Story class="" :user="{name:'Aqib Ullah'}" img="https://media.licdn.com/dms/image/D4D03AQH-Ekw26UxEXQ/profile-displayphoto-shrink_400_400/0/1664473702031?e=2147483647&v=beta&t=5Qq2TDrZnWqqiCheEE5VS2Yq-urM2oYM69p78oAH1M8"></Story>
          <div class="absolute flex flex-col p-1 w-full h-auto bg-gray-100/50 text-center rounded-2xl bottom-6">
<!--              <div class="flex flex-col items-center gap-3">-->
                <IconButton class="relative top-[-15px] bg-blue-600 m-auto text-gray-100 ring-2 ring-sky-100" icon="bi-plus" scale="1"></IconButton>
                <span class="relative bottom-2 text-xs font-bold text-gray-700 text-center">Create Story</span>
<!--              </div>-->
          </div>
        </div>
        <Story class="embla__slide mr-2" v-for="(item,i) in stories" :key="i" :user="item.user" :img="item.img" :total="item.total"></Story>
      </div>
    </div>
  </div>
</template>

<style scoped>
.embla {
  overflow: hidden;
}
.embla__container {
  display: flex;
}
.embla__slide {
  flex: 0 0 20%;
  min-width: 0;
}
</style>
