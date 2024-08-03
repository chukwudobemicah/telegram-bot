// require("dotenv").config();
const { Telegraf } = require("telegraf");
const bot = new Telegraf("7388313713:AAHaXOF3J9Fwq3dFuAEhNCgRQHoBHGQZLiA");
const web_link = "https://michael-folio.vercel.app/";
// console.log("Bot Token:", '7388313713:AAHaXOF3J9Fwq3dFuAEhNCgRQHoBHGQZLiA');

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

bot.launch();
