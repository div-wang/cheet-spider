const formData = require('../utils/getForm');
const request = require('../utils/request');

const Total_Data = () => {
  let form = formData()
  return request.post('Total_Data', { data: form })
    .then(function (res) {
      return res.text();
    })
}

module.exports = Total_Data
