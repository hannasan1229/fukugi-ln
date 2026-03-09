import { createApp } from 'vue'
import App from './App.vue'

// Styles
import './styles/app.css'
import './styles/layout.css'
import './styles/typography.css'
import './styles/effects.css'

// Router
import router from './router'

// Pinia
import { createPinia } from 'pinia'

// Firebase
import { db } from './services/firebase'

// 🧠 Head / SEO
import { createHead } from '@vueuse/head'

const app = createApp(App)

// Plugins
app.use(createPinia())
app.use(router)

// Head-Manager registrieren
const head = createHead()
app.use(head)

// Firebase bereitstellen
app.provide('db', db)

// Mount
app.mount('#app')
