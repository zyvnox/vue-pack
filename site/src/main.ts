import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Consumer simulation: Import library stylesheet
import '@zyvnox/vue-pack/style.css'
import 'leaflet/dist/leaflet.css'
import 'virtual:uno.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
