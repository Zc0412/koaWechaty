const Router = require("@koa/router");
const router = new Router();
const {loginWechat} = require("../controller/loginWechat")

router.get("/", loginWechat);

module.exports = router;
