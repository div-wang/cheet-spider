const formData = require('../utils/getForm');
const request = require('../utils/request');

const trData = (data, type) => {
  console.log(data.length)
  let total = 0
  let cash = 0
  let nonCash = 0
  for (let i = 0; i < data.length; i++) {
    const el = data[i];
    if (el.TrResult === 0) {
      if (type === 0) {
        total += el.TrSalePrice
        if (el.TrPayType === 0) {
          cash += el.TrSalePrice
        } else {
          nonCash += el.TrSalePrice
        }
      } else {
        total += 1
        if (el.TrPayType === 0) {
          cash += 1
        } else {
          nonCash += 1
        }
      }
    }
  }
  return type === 0 ? {
    cash,
    nonCash,
    amount: total
  } : {
    cash,
    nonCash,
    number: total
  }
}
const Total_Data = async (ctx) => {
  let data = global.data
  // let amount = [
  //   trData(data.day, 0),
  //   trData(data.yesterday, 0),
  //   trData(data.month, 0),
  // ]
  // let quantity = [
  //   trData(data.day, 1),
  //   trData(data.yesterday, 1),
  //   trData(data.month, 1),
  // ]
  ctx.body = data
}

module.exports = Total_Data
