import DepTopBar from './src/depTopBar';

/* istanbul ignore next */
DepTopBar.install = function(Vue) {
  console.log('自动调用install');
  Vue.component(DepTopBar.name, DepTopBar);
};

export default DepTopBar;
