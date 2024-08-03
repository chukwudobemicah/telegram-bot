const { Telegraf } = require("telegraf");
// const { message } = require('telegraf/filters')
const BOT_TOKEN = "7388313713:AAHaXOF3J9Fwq3dFuAEhNCgRQHoBHGQZLiA";
const bot = new Telegraf(BOT_TOKEN);
const web_link = "https://michael-folio.vercel.app/";

bot.start((ctx) =>
  ctx.reply("Welcome, This is from Micah!. Click on the buton to start bot", {
    reply_markup: {
      keyboard: [
        [
          {
            text: "web app",
            web_app: {
              url: web_link,
            },
          },
        ],
      ],
    },
  })
);
// bot.help((ctx) => ctx.reply('Send me a sticker'))
// bot.on(message('sticker'), (ctx) => ctx.reply('👍'))
// bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch();

// // Enable graceful stop
// process.once('SIGINT', () => bot.stop('SIGINT'))
// process.once('SIGTERM', () => bot.stop('SIGTERM'))
