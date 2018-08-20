const request = require('../utils/request');
const formData = require('../utils/getForm');
const dateType = require('../utils/dateType');

const Search = (time, type, page) => {
  const form = formData()
  form.append('IndexTime', dateType(time))
  form.append('Type', type || '') // 1,2,3,4,5
  form.append('Page', page || 1)
  return request.post('Seach', { data: form })
    .then(function (res) {
      return res.text();
    })
}

module.exports = Search
