import { createApp } from 'vue'
import store from './state/store.js'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import './assets/style.css'


const app = createApp(App)

library.add(faUserSecret)

app.use(store)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
