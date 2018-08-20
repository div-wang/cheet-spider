const fs = require('fs');
const http = require('http');
const https = require('https');

const Koa = require('koa');
const Router = require('koa-router')();
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


http.createServer(app.callback()).listen(3050);
var credentials = {
  "key": fs.readFileSync('/Users/div/.ssh/div36.key', 'utf8'),
  "cert": fs.readFileSync('/Users/div/.ssh/div36.cert', 'utf8')
};
https.createServer(credentials, app.callback()).listen(3051);

logger.info('listen: 3050')








