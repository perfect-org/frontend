import './main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { vueQueryPlugin } from './providers/vue-query'
import App from './App.vue'
import { router } from './providers/router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vueQueryPlugin)
app.use(vuetify)
app.mount('#app')
