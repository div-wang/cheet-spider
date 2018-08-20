const fetch = require('node-fetch');

// 请求接口的链接
const BaseDomin = 'http://www.tcnvmms.com:83/WapAPP/'
// 获取头部信息
const getHeader = (head) => {
  const header = Object.assign({
    DNT: 1,
    Cookie: global.cookie,
    Referer: 'http://www.tcnvmms.com:83/wapapp/ReportTotal?appid=wx06841a4851467238&openid=opcWyw1UbjcOY9C1ZKz53t6bqnR0',
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_2_1 like Mac OS X) AppleWebKit/604.4.7 (KHTML, like Gecko) Mobile/15C153 MicroMessenger/6.6.1 NetType/WIFI Language/zh_CN'
  }, head)
  return header
}
// get方法
const get = (url, op) => {
  op = op || {}
  return fetch(BaseDomin + url, { method: 'GET', body: op.data, headers: getHeader(op.head) })
}
// post方法
const post = (url, op) => {
  op = op || {}
  return fetch(BaseDomin + url, { method: 'POST', body: op.data, headers: getHeader(op.head) })
}

module.exports = {
  get,
  post
}
