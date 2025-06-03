const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const referral = msg.text.split(" ")[1];

  let message = `👋 Welcome, ${msg.from.first_name}!\n\n`;
  if (referral) {
    message += `🎉 You were referred by user ID: ${referral}`;
  } else {
    message += `ℹ️ No referral code used.`;
  }

  bot.sendMessage(chatId, message);
});
