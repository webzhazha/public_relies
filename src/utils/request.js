import Qs from 'qs'
import axios from 'axios'
export const get = (url, params) => {
  return axios.get(url, {
    params
  }).then((response) => {
    if (response.status == 200) {
      return Promise.resolve(response.data || {})
    }
  }).catch(function(error) {
    
  })
}

const request = (url, params, opts) => {
  return axios({
    url: url,
    method: opts.method || 'post',
    headers: {
      'Content-Type': getContentType(opts)
    },
    transformRequest: [function(data) {
      // 对 data 进行任意转换处理
      if (opts.dataType == 'JSON') {
        return JSON.stringify(data)
      } else {
        return Qs.stringify(data)
      }
    }],
    data: params
  }).then((response) => {
    const { status, state, code, error_code } = response.data
    return Promise.resolve(response.data || {})
  }).catch(function(error) {
  })
}
export const post = (url, params, opts = {}) => {
  console.log(opts)
  opts.method = 'post'
  return request(url, params, opts)
}
export const patch = (url, params, opts = {}) => {
  opts.method = 'patch'
  return request(url, params, opts)
}
export const put = (url, params, opts = {}) => {
  opts.method = 'put'
  return request(url, params, opts)
}
export const del = (url, params, opts = {}) => {
  opts.method = 'delete'
  return request(url, params, opts)
}
