const { Wechaty, MiniProgram, UrlLink } = require("wechaty");
const qrTerm = require("qrcode-terminal");
const dayjs = require("dayjs");
const schedule = require("node-schedule");

const  scheduleCronstyle = (bot)=>{
    //每分钟的第30秒定时执行一次:
      schedule.scheduleJob('0 1 * * * *',async()=>{
          console.log('定时任务开始啦:' + new Date());
          const contact = await bot.Contact.find({name: '张明城'})
          try {
            await contact.say(`定时任务开始啦，当前时间是：${new Date()}`);
          }catch (err) {
            console.log(err);
          }
          
      }); 
  }

// 生成二维码&&链接
const onQrCode = (qrcode, status) => {
  // 扫描二维码登录
  console.log(`想自动回复消息吗？请扫描下方二维码登录！`);
  // 二维码
  qrTerm.generate(qrcode, { small: true });
  console.log(`请复制下方链接于浏览器打开，并扫描二维码登录。`);
  // 二维码链接
  console.log(`https://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`);
};

// 微信登录
const onLogin = async (bot) => {
  // 获取用户名
//   const userName = await user.name();
//   console.log(`贴心小助理上线啦！昵称：${userName}`);
  console.log(`贴心小助理上线啦！`);
  scheduleCronstyle(bot);
};

// 消息处理
const onMessage = async (m) => {
  // 联系人名字
  const contact = m.talker();
  //   发送的内容
  const text = m.text();
  //   是否群消息
  const room = m.room();
  //   发消息的时间
  //   const msgDate = m.date();

  // 微信群消息
  if (room) {
    //   群聊名字
    const topic = await room.topic();
    console.log(
      `主人！该死的群聊发消息啦，该死的群聊名：${topic}，好可爱的伙伴：${contact.name()};msg：${text}`
    );
  } else {
    await contact.say(
      `亲爱的${contact.name()}，我是主人的贴心小助理，主人目前不在线，请留言! `
    );
  }
};

const onLogout = async (user) => {
  // 获取用户名
  const userName = await user.name();
  console.log(`贴心小助理退出登录啦！期待下次见！！！昵称：${userName}`);
};

async function weChatBot() {
  const bot = new Wechaty();
  // 生成二维码
  bot
    .on("scan", onQrCode)
    .on("login", ()=>onLogin(bot))
    .on("message", onMessage)
    .on("logout", onLogout);
  await bot.start();
}

weChatBot().catch(console.error);

module.exports = { weChatBot };