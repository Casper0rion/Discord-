const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');
const { prefix, token } = require('./config.json');

// This section is completly used for Var properties only
//REMINDER somethings may be in the settings file



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

function alive()
{
    online = false;
}
 
client.on('message', message => {
    if (message.content === '${prefix}ping') {
        message.channel.send('Pong :ping_pong:!.');
    }
});
   


if (msg.content === '${prefix}info') {
    msg.reply('Display bot info here');
    
  }
});

// Create an event listener for messages

  // If the message is "what is my avatar"
else  if (message.content === '&avatar') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
);

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});


else if (message.content === '${prefix}server') {
  message.channel.send('The curent server is: ${message.guild.name}');
}



































client.login(config.token);