import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// import en from 'element-plus/dist/locale/en.mjs'
import i18n from './language/i18n'

const app = createApp(App)
app.use(router)
app.use(ElementPlus, {
  loacle: zhCn
})
app.use(i18n)
app.mount('#app')
