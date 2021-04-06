import Banner from './src/banner';

/* istanbul ignore next */
Banner.install = function(Vue) {
  console.log('自动调用install');
  Vue.component(Banner.name, Banner);
};

export default Banner;
