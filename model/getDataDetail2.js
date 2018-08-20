const logger = require('../utils/logger');
const request = require('../utils/request');
const formData = require('../utils/getForm');

const DetailData = async (ctx) => {
  const { time, id, page } = ctx.query
  const type = time === '本月' ? 'Month' : time === '本周' ? 'Week' : time
  const form = formData()
  form.append('IndexTime', type)
  form.append('MachID', id) // 1,2,3,4,5
  form.append('Page', page || 1)
  let data = await request.post('SalesDetailData', { data: form })
    .then(function (res) {
      return res.text();
    })
  ctx.body = data
}

module.exports = DetailData
