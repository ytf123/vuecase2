import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue' // 完整引入
import 'ant-design-vue/dist/antd.css'
// import { Button, message } from 'ant-design-vue'

const app = createApp(App).use(store).use(router).mount('#app')

app.use(Antd)
// app.use(Button)
// app.prototype.$message = message
app.config.productionTip = false

app.config.globalProperties.$example = () => console.log('globalexample!')

app.directive('my-directive', {
  mounted(el) {
    el.focus()
  }
})
