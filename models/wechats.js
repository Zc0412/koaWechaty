const {Wechat} = require('../utils/db')
// 保存登录的用户名
const wechatModel = async (username) => {
    const wechat = new Wechat({
        username: username,
        create_time: new Date()
    })
    return await wechat.save()
}

// 查询所有的WeChat用户
const queryWechatUsersModel = async () => {
    return Wechat.find({});
}

module.exports = {wechatModel, queryWechatUsersModel}