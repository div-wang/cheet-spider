const logger = require('../utils/logger');
const getDataSearch = require('./getDataSearch');
const getDataDetail = require('./getDataDetail');

const getPage = (key, id, page, data, resolve) => {
  getDataDetail(key, id, page).then((res) => {
    let arr = trArray(res)
    data = data.concat(arr)
    if (arr.length === 20) {
      getPage(key, id, page + 1, data, resolve)
    } else {
      resolve(data)
    }
  })
}
const concatArr = async (key, id, page) => {
  const data = []
  return new Promise((resolve, reject) => {
    getPage(key, id, page, data, resolve)
  })
}

const trArray = (arr) => {
  return arr ? JSON.parse(arr) : []
} 

module.exports = async (ctx, next) => {
  let data = { machine: [], product: { 'day': [], 'yesterday': [], 'week': [], 'month': [] } }
  let search = JSON.parse(await getDataSearch('day', 3))
  let search2 = JSON.parse(await getDataSearch('day', ''))
  for (let i = 0; i < search.length; i++) {
    const el = search[i]
    const el2 = search2[i]
    data.machine.push({
      MachineGroupName: el.MGName,
      MachineID: el.MachineID,
      MachineName: el.MachineName,
      MachineAlias: el2.MiAlias,
      MachineAddress: el2.MiAddress
    })
  }
  data.machine.forEach(async (item) => {
    let detail = await concatArr('day', item.MachineID, 1)
    data.product.day = detail
    let detail2 = await concatArr('yesterday', item.MachineID, 1)
    data.product.yesterday = detail2
    let detail3 = await concatArr('week', item.MachineID, 1)
    data.product.week = detail3
    let detail4 = await concatArr('month', item.MachineID, 1)
    data.product.month = detail4
    logger.info('getDetailData:::OK' + item.MachineID)
  });
  global.data = data
  logger.info('getDetailData:::start')
};

