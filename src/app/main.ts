import '@/app/assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { OhVueIcon,addIcons } from "oh-vue-icons";

import App from './App.vue'
import router from './router'

const app = createApp(App)
import * as FaIcons from "oh-vue-icons/icons";

const Fa = Object.values({ ...FaIcons });
addIcons(...Fa);
app.use(createPinia())
app.use(router)
app.use(OhVueIcon);
app.component('v-icon',OhVueIcon)
app.mount('#app')
