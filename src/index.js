import './style/index.css'

import Button from './components/button'

const components = [
  Button
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
  Button
}