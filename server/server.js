const Koa = require('koa');
const Router = require('koa-router');
const BodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const cors = require('koa2-cors');
const koaBody = require('koa-body');

const app = new Koa();
const router = new Router({
  prefix: '/api'
});

require('./mongo')(app);
require('./routes')(router);

app.use(logger());
app.use(BodyParser());
app.use(koaBody({ multipart: true }));
app.use(cors({
  origin: '*',
  allowMethods: ['GET', 'POST', 'DELETE'],
}));

app.use(router.routes()).use(router.allowedMethods());

app.listen(3001);