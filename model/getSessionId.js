const logger = require('../utils/logger');
const request = require('../utils/request');
const getCookie = require('../utils/getCookie')

const getSessionId = async (ctx) => {
  const cookie = await request.get('CheckUserGroup')
    .then((res) => {
      const cookieStr = res.headers._headers['set-cookie'] || []
      const cookie = getCookie(cookieStr)
      return cookieStr[0].split(';')[0]
    })
    .catch(err => {
      logger.info('getSessionId::error:' + err)
    })
  logger.info('getSessionId:' + cookie)
  global.cookie = cookie
}

module.exports = getSessionId
