import './style/index.scss'

import Button from './components/button'
import FootNav from './components/footNav'
import DepTopBar from './components/depTopBar'

const components = [
  Button,
  FootNav,
  DepTopBar
]

let version = '0.1.11'

const install = function(Vue) {
  components.forEach(component => {
    Vue.use(component);
  });
}
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

// 按需导出
export {
  Button,
  FootNav,
  DepTopBar
}

// 全局导出
export default {
  install,
  version
}