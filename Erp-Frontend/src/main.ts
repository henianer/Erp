import { createApp } from 'vue';
import 'element-plus/dist/index.css'; // 引入element-plus样式
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate' // 引入持久化插件

const pinia = createPinia() // 创建pinia实例
pinia.use(piniaPluginPersistedstate) // 使用持久化插件

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(pinia)
app.mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
