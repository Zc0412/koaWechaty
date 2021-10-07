const Router = require("@koa/router");
const router = new Router();
const {queryWechatUsers} = require("../controller/queryWechatUsers")
const {YDWorld} = require("../controller/ydWorld")

// 获取所有的用户
router.get("/queryWechatUsers", queryWechatUsers);
router.get("/YDWorld", YDWorld);

module.exports = router;
