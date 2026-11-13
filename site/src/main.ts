import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import DocHeader from './components/DocHeader.vue'

// Consumer simulation: Import library stylesheet
import '@zyvnox/vue-pack/style.css'
import 'leaflet/dist/leaflet.css'
import 'virtual:uno.css'

const app = createApp(App)
app.component('DocHeader', DocHeader)
app.use(router)
app.mount('#app')
