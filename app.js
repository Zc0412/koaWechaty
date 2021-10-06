const Koa = require('koa');
const app = new Koa()
const router = require('./routes/index');
// 微信机器人
require('./utils/bot')

app.use(router.routes());  // 添加路由中间件
app.use(router.allowedMethods()); // 对请求进行一些限制处理

app.listen(3303)