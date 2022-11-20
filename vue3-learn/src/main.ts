import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Card from './components/Card.vue'
import router from './router'

createApp(App).use(router).component('Card', Card).mount('#app')

