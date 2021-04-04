import './style/index.scss'

import Button from './components/button'
import FootNav from './components/footNav'

const components = [
  Button,
  FootNav
]


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

export default {
  install,
  Button,
  FootNav
}