const TelegramBot = require('node-telegram-bot-api');
const token = '7310486267:AAHkvpvvnpzitHNgxdWKbhMdt5thmVmBbGY';
const bot = new TelegramBot(token, { polling: true });

const gameShortName = 'testTonBot'; // The short name you got from BotFather

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Welcome to the dice game! Type /play to start playing.");
});

bot.onText(/\/play/, (msg) => {
  bot.sendMessage(msg.chat.id, gameShortName);
});

// bot.on('callback_query', (query) => {
//   bot.answerCallbackQuery(query.id);
// });

console.log('Bot is running...');
