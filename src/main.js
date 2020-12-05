import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"

axios.default.baseURL ='https://8080-d794964a-e00d-4306-a3f2-51b354d1f70d.ws-us03.gitpod.io';
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
