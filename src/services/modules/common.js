import { get, patch } from '@/utils/request.js'
// import store from '../../store/store.js'
import { readCookie,getUrlParam } from '@/utils/util'
import { cube, guaHao } from '@/config/apiHost.js'
console.log(222);
console.log(cube);
// import { getLatAndLng } from '@/config/getLatLng.js'
const getUserKey = () => {
  // return store.state.Common.userInfo ? store.state.Common.userInfo.user_key : ''
  return ''
}
// 千人千面获取cube-data接口数据--不需要登录广告接口
const getAdvertData = async params => {
  let cityId = getUrlParam('city_id') || (readCookie('location_city_id') || 5)
  let areaId = cityId ? `?area_id=${cityId}` : ''
  const userKey = getUserKey() ? `&user_key=${getUserKey()}` : ''
  //if(params.location_id == '121'){ //首页弹框广告id
  //传递性别年龄等信息
  const age = readCookie('account_user_age') || ''
  const user_id = readCookie('account_user_user_id') || ''
  const sex = readCookie('account_user_sex') || ''
  const cat_id = readCookie('account_user_cat_id') || ''
  if (age) {
    params.age = age
  }
  if (user_id) {
    params.user_id = user_id
  }
  if (sex) {
    params.sex = sex
  }
  if (cat_id) {
    params.user_dep_ids = cat_id
  }
  //}
  // 如果cookie中cur_city_id和location_city_id相同, 则读取cur_area_id
  //首页顶部宫格广告位area_id对应城市id，其他广告位area_id对应区id
  const exclusive = ['topConfig','illTagModule','recommend']
  if(!params.area_id && (readCookie('location_city_id')==readCookie('cur_city_id'))
    && readCookie('cur_area_id') &&  !exclusive.includes(params.module_name)){
    areaId = `?area_id=${readCookie('cur_area_id')}`
  }
  return get(`${cube}/v1/adlist.html${areaId}${userKey}`, params)
}

export default {
  getAdvertData,
}
