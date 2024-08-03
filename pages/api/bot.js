const { Telegraf } = require("telegraf");
const bot = new Telegraf("7017113574:AAGmdQwaf4lNyq67i4BSg23-5M-E9VflAJM");
const web_link = "https://solpages-landing-page.vercel.app/";

bot.start((ctx) =>
  ctx.reply(
    "Welcome, This is from Micah! Click the button below to start the bot.",
    {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "Open Web App",
              web_app: {
                url: web_link,
              },
            },
          ],
        ],
      },
    }
  )
);

bot.launch();
