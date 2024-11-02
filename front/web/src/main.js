import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import persist from 'pinia-plugin-persistedstate'
import plugins from '@/plugins'
import '@/styles/index.scss'
import 'animate.css'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(createPinia().use(persist))
app.use(router)
app.use(plugins)
app.mount('#app')
