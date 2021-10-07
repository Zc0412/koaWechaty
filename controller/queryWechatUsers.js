const {queryWechatUsersModel} = require('../models/wechats')
// 获取所有的用户
const queryWechatUsers = async (ctx) => {
    ctx.body = await queryWechatUsersModel();
};

module.exports = {queryWechatUsers};
