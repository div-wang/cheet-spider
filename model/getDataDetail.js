const logger = require('../utils/logger');
const request = require('../utils/request');
const formData = require('../utils/getForm');
const dateType = require('../utils/dateType');

const DetailData = (type, id, page) => {
  const form = formData()
  form.append('IndexTime', dateType(type))
  form.append('MachID', id) // 1,2,3,4,5
  form.append('Page', page || 1)
  return request.post('SalesDetailData', { data: form })
    .then(function (res) {
      return res.text();
    })
}

module.exports = DetailData
