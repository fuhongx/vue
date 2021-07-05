import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'

Vue.prototype.axios = axios // Vue.prototype.axios中，axios作为变量，可以任意修改成ajax或者$http等

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
