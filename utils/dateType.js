const { dateFormat, dateLess24 } = require('../utils/date');
const type = (type) => {
  let time = Date.now()
  let yesterday = dateLess24(time)
  let dateObj = {
    day: dateFormat(time, 'dd/MM/yyyy'), 
    yesterday: dateFormat(yesterday, 'dd/MM/yyyy'),
    week: '本周',
    month: '本月'
  }
  return dateObj[type]
}

module.exports = type
