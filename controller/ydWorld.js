const {YDWorldModel} = require('../models/ydWorld')
// 获取有道词典每日一句
const YDWorld = async (ctx) => {
    ctx.body = await YDWorldModel()
}
module.exports = {
    YDWorld
}