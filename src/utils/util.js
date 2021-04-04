
const Base64 = require('js-base64').Base64




// 写cookies
export const setCookie = (name, value, days) => {
  var ndays = days || 0.2
  var exp = new Date()
  exp.setTime(exp.getTime() + ndays * 24 * 60 * 60 * 1000)
  var secure = document.location.protocol == 'https:' ? ';secure=true' : ''
  document.cookie = name + '_v2=' + Base64.encode(value) + ';expires=' + exp.toGMTString() + secure + ';path=/;domain=.91160.com'
}

export const getUrlParam = pname => {
  var index = location.href.indexOf('?')
  var params = location.href.substr(index + 1) // 获取参数 平且去掉？
  var ArrParam = params.split('&')
  // 多个参数参数的情况
  for (var i = 0; i < ArrParam.length; i++) {
    if (ArrParam[i].split('=')[0] == pname) {
      return ArrParam[i].substr(ArrParam[i].indexOf('=') + 1)
    }
  }
}





// 读取cookies
export const readCookie = name => {
  var arr = []
  var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  var reg_v2 = new RegExp('(^| )' + name + '_v2=([^;]*)(;|$)')
  if (
    document.cookie.indexOf(name + '_v2') != -1 &&
    (arr = document.cookie.match(reg_v2))
  ) {
    return Base64.decode(arr[2])
  } else if (
    document.cookie.indexOf(name) != -1 &&
    (arr = document.cookie.match(reg))
  ) {
    if (arr[2].indexOf('%u') != -1) {
      return unescape(arr[2])
    } else {
      return decodeURIComponent(arr[2])
    }
  } else {
    return null
  }
}

// 删除cookies
export const delCookie = name => {
  var cval = readCookie(name)
  var exp = new Date()
  exp.setTime(exp.getTime() - 1)
  var secure = document.location.protocol == 'https:' ? ';secure=true' : ''
  if (cval != null) {
    document.cookie =
      name + '=' + cval + ';expires=' + exp.toGMTString() + secure + ';path=/'
  }
}


// 存储,可设置过期时间
export const setLocalStorage = (key, value, expires) => {
  const params = { key, value, expires }
  if (expires) {
    // 记录何时将值存入缓存，毫秒级
    var data = Object.assign(params, { startTime: new Date().getTime() })
    localStorage.setItem(key, JSON.stringify(data))
  } else {
    if (Object.prototype.toString.call(value) == '[object Object]') {
      value = JSON.stringify(value)
    }
    if (Object.prototype.toString.call(value) == '[object Array]') {
      value = JSON.stringify(value)
    }
    localStorage.setItem(key, value)
  }
}
// 取出
export const getLocalStorage = (key) => {
  let item = localStorage.getItem(key)
  // 先将拿到的试着进行json转为对象的形式
  try {
    item = JSON.parse(item)
  } catch (error) {
    // eslint-disable-next-line no-self-assign
    item = item
  }
  // 如果有startTime的值，说明设置了失效时间
  if (item && item.startTime) {
    const date = new Date().getTime()
    // 如果大于就是过期了，如果小于或等于就还没过期
    if (date - item.startTime > (item.expires * 3600000)) {
      localStorage.removeItem(name)
      return false
    } else {
      return item.value
    }
  } else {
    return item
  }
}


export const isIOS = () => {
  const u = navigator.userAgent
  const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端
  return isiOS
}



