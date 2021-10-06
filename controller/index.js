const {weChatBot}  = require('../utils/bot');

const send = async (ctx) => {
  await weChatBot()
  ctx.body = "<h2>hello koa router !!!!</h2>";
};

module.exports = { send };
