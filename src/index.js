const { Telegraf, Markup } = require('telegraf');

const bot = new Telegraf('7866617284:AAHDOfPQJdKmufOdRgFza6XA8ZWRHPeA_Yc');
const serverUrl = 'https://dev.bro-js.ru/'
const signUpUrl = serverUrl + 'sberhubproject/signup'
const editUserUrl = serverUrl + 'sberhubproject/edit-user'
const eventListUrl = serverUrl + 'sberhubproject/event-list'

bot.start((ctx) =>
  ctx.reply(
    `Пожалуйста, зарегистрируйтесь или посмотрите события`,
    Markup.inlineKeyboard([
      [Markup.button.webApp('📝 Sign up', signUpUrl)],
      [Markup.button.webApp('📝 Edit user', editUserUrl)],
      [Markup.button.webApp('📅 View Events', eventListUrl)]
    ])
  )
);

bot.launch({
  polling: true,
});