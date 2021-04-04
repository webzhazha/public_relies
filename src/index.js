import './style/index.scss'

import Button from './components/button'
import FootNav from './components/footNav'

const components = [
  Button,
  FootNav
]

let version = '0.1.8'

const install = function(Vue) {
  console.log('触发install');
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
  FootNav
}

// 全局导出
export default {
  install,
  version
}