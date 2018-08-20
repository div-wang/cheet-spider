// 时间格式化
const dateFormat = (d, fmt) => {
  if (!d || !fmt) {
    return ''
    // throw new Error('lack date or format')
  }
  // 转换毫秒和字符串为时间对象
  if (typeof d === 'string' || typeof d === 'number') {
    d = new Date(d)
  }
  // d是NaN的时候返回空
  if (isNaN(d)) return ''
  const o = {
    'M+': d.getMonth() + 1, // 月份
    'd+': d.getDate(), // 日
    'h+': d.getHours(), // 小时
    'm+': d.getMinutes(), // 分
    's+': d.getSeconds(), // 秒
    'q+': Math.floor((d.getMonth() + 3) / 3), // 季度
    'S': d.getMilliseconds() // 毫秒
  }

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (d.getFullYear() + '').substr(4 - RegExp.$1.length))
  }

  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? '000' : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}
// 20180518 => 2018-05-18
const dateTransform = (str) => {
  if (str && str.length === 8) {
    let y = str.slice(0, 4)
    let m = str.slice(4, 6)
    let d = str.slice(6, 8)
    return `${y}-${m}-${d}`
  } else {
    return ''
  }
}
// 转换成当前时区（东八区时间）
const UTCto0800 = (time) => {
  let d = new Date(time)
  return d.getTime() + (d.getTimezoneOffset() * 60 * 1000)
}
// 时间增加1天
const datePlus24 = (time) => {
  let hour = 3600000
  let day = hour * 24
  return new Date(parseInt((time + day) / day) * day - 8 * hour)
}
// 时间减1天
const dateLess24 = (time) => {
  let hour = 3600000
  let day = hour * 24
  return new Date(time - day)
}

module.exports = { dateFormat, datePlus24, dateLess24, dateTransform, UTCto0800 }
