const formData = require('../utils/getForm');
const request = require('../utils/request');

const Total_8 = () => {
  let form = formData()
  return request.post('Total_8', { data: form })
    .then(res => {
      return res.text();
    })
}

module.exports = Total_8
