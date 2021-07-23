import { createApp } from 'vue'
import App from './App.vue'
import DirectionControl from 'direction-control'
import "direction-control/more-player.css"

const app = createApp(App)
app.use(DirectionControl)
app.mount('#app')