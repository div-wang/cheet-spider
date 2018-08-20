const art = require('art-template');
const path = require('path');

const logger = require('../utils/logger');

const getTotal8 = require('../model/getTotal8');
const getTotalData = require('../model/getTotalData');

const transformTotal = (str) => {
  let amount = [];
  let quantity = [];
  let arr = str.split('@')
  for (let i = 0; i < arr.length; i++) {
    const newArr = arr[i].split('|')
    for (let j = 0; j < newArr.length; j++) {
      const item = newArr[j].split(',')
      let newObj = {}
      if (i === 0) {
        newObj.amount = parseInt(item[0] * 0.8)
        newObj.cash = parseInt(item[1] * 0.8)
        newObj.nonCash = parseInt(item[2] * 0.8)
        amount[j] = newObj
      } else {
        newObj.number = parseInt(item[0] * 0.8)
        newObj.cash = parseInt(item[1] * 0.8)
        newObj.nonCash = parseInt(item[2] * 0.8)
        quantity[j] = newObj
      }
    }
  }
  return { amount, quantity }
}
const transformData = (arr) => {
  arr = JSON.parse(arr)
  let amount = [];
  let quantity = [];
  let time = [];
  for (let i = 0; i < arr.length; i++) {
    amount.push(parseInt(arr[i].TotalAmount * 0.8))
    quantity.push(parseInt(arr[i].TotalCount * 0.8))
    const timeNum = Number(arr[i].PTime.replace(/[^0-9]/ig, ''))
    const date = new Date(timeNum)
    time.push(date.getMonth() + 1 + '/' + date.getDate())
  }
  return { amount, quantity, time }
}
module.exports = async (ctx, next) => {
  let total8 = await getTotal8()
  let totalData = await getTotalData()
  let data = transformTotal(totalData)
  data.lineData = transformData(total8)
  await next();
  if (!ctx.body) {
    let template = path.resolve(__dirname, '../template/home.art');
    if (template) {
      ctx.body = art(template, data);
    }
  }
};

