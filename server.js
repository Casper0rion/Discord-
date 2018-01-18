
const Discord = require("discord.js");
const client = new Discord.Client();
const token = 'Mzk3NjA0NjYxMjIzMzU4NDc0.DUJY2A.uykv_RJpJKf4q0Rglx5vaUfy_9U'


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('token');
