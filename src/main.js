import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import axios from 'axios'

Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(Router)

const router = new Router({
  mode: "history",
});
import './style/index.scss'

// 引入elButton
import elButton from './components/button'
import footNav from './components/footNav'
import depTopBar from './components/depTopBar'

Vue.use(elButton)
Vue.use(footNav)
Vue.use(depTopBar)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
