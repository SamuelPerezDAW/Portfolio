import { createApp } from 'vue'
import './style.css'
import PrimeVue from 'primevue/config'
import aura from '@primeuix/themes/aura'
import App from './App.vue'
import { router } from './router/MainRouter'


var app = createApp(App)

app.use(PrimeVue, {
    theme: {
      preset: aura,
    },
  })

app.use(router)

app.mount('#app')
