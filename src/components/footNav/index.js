import FootNav from './src/footNav';

/* istanbul ignore next */
FootNav.install = function(Vue) {
  console.log('自动调用install');
  Vue.component(FootNav.name, FootNav);
};

export default FootNav;
