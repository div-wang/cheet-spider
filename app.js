const fs = require('fs');
const http = require('http');
const https = require('https');
const exec = require('child_process').exec;   

const Koa = require('koa');
const Router = require('koa-router')();
const { dateFormat } = require('./utils/date');
// const mongoose = require('mongoose')

const getData = require('./model/getData');
const getSearch = require('./model/getSearch');
const getSessionId = require('./model/getSessionId');
const getDataDetail = require('./model/getDataDetail2');
const getTotal = require('./model/getTotalData2');

const logger = require('./utils/logger');
const header = require('./middleware/header');
const onerror = require('./middleware/onerror');

const homeTpl = require('./view/home');
const listTpl = require('./view/list');
const detailTpl = require('./view/detail');
let app = new Koa();

// getData();
getSessionId();
app.use(onerror);
app.use(header);

Router.get('/', homeTpl)
Router.get('/list', listTpl)
Router.get('/detail', detailTpl)
Router.get('/api/search', getSearch)  
Router.get('/api/detailData', getDataDetail)
Router.get('/api/total', getTotal)

app.use(Router.routes())


http.createServer(app.callback()).listen(3060);
var credentials = {
  "key": fs.readFileSync('/home/div/.ssh/div36.key', 'utf8'),
  "cert": fs.readFileSync('/home/div/.ssh/div36.cert', 'utf8')
};
https.createServer(credentials, app.callback()).listen(3061);
exec(`mv start.log ./logs/start.${dateFormat(Date.now(), 'yyMMddhhmm')}.log && touch start.log`, (err, stdout, stderr) => {
  if (err) logger.error(err)
  logger.info('listen: 3060')
  fs.writeFileSync('stop.sh', `kill -9 ${process.pid}`, 'utf8')
  fs.chmodSync('stop.sh', "777")
})









