import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import './style/index.css'

// 引入elButton
import elButton from './components/button'

Vue.use(elButton)

new Vue({
  render: h => h(App),
}).$mount('#app')
