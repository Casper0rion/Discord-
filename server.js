const Discord = require("discord.js");
const client = new Discord.Client();
const token = 'Mzk3NjA0NjYxMjIzMzU4NDc0.DUOu1w.bs4punNWQN3QL6MPcsLUp-lcdJc'

var online = false;







client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

function alive()
{
    online = false;
}

client.on('message', msg => {
  if (msg.content === '&ping') {
    msg.reply('Pong!:ping_pong: ');
  
  
  }
});

client.on('message', msg => {
  if (msg.content === '&info') {
    msg.reply('Display bot info here');
  
  
  }
});

client.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === '&avatar') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
});

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});

































client.login(token);
