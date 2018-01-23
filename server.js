const Discord = require("discord.js");
const client = new Discord.Client();
const token = 'Mzk3NjA0NjYxMjIzMzU4NDc0.DUOu1w.bs4punNWQN3QL6MPcsLUp-lcdJc'



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!:ping_pong: ');
  
    var args = message.content.substring.split(" ");
  switch (args[0]) {
    case "ping":
      message.channel.sendmessage("pong");
      break;
  
  }
};


       








client.login(token);
