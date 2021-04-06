import ElButton from './src/button';

/* istanbul ignore next */
ElButton.install = function(Vue) {
  console.log('自动调用install');
  Vue.component(ElButton.name, ElButton);
};

export default ElButton;
