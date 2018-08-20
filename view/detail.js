const art = require('art-template');
const path = require('path');

const logger = require('../utils/logger');
const { dateFormat, dateLess24 } = require('../utils/date');
const tplList = require('../template/tplList');

module.exports = async (ctx, next) => {
  let time = Date.now()
  let yesterday = dateLess24(time)
  let data = {
    tplOne: tplList[6],
    date: [dateFormat(time, 'dd/MM/yyyy'), dateFormat(yesterday, 'dd/MM/yyyy'), '本周', '本月']
  }
  await next();
  if (!ctx.body) {
    let template = path.resolve(__dirname, '../template/detail.art');
    if (template) {
      ctx.body = art(template, data);
    }
  }
};

