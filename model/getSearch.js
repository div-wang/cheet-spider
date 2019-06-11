const formData = require('../utils/getForm');
const logger = require('../utils/logger');
const request = require('../utils/request');

const Search = async (ctx, next) => {
  const form = formData()
  const { time, type, page } = ctx.query
  form.append('IndexTime', time || '本周')
  form.append('Type', type || '') // 1,2,3,4,5
  form.append('Page', page || 1)
  form.append('isAsc', 1)
  const data = await request.post('Seach', { data: form })
    .then(function (res) {
      return res.text();
    })
  // logger.info('Search:' + data)
  ctx.body = data
}

module.exports = Search
