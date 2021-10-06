const mongoose = require('mongoose')
// 连接数据库
mongoose.connect('mongodb://localhost/xx_users');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
});

// 创建Wechat usersSchema
let usersSchema = mongoose.Schema({
    username: String,
    create_time: Date,

});
// 创建一个model
let Wechat = mongoose.model('wechatUsers', usersSchema);

module.exports = {Wechat}