const Router = require("@koa/router");
const router = new Router();
const {send} = require("../controller/index")

router.get("/", send);

module.exports = router;
