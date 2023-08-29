import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/routes.js'

import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import store from './store/index.js'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi'
  }
})

createApp(App).use(router).use(store).use(vuetify).mount('#app')
