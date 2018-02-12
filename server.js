
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);



const Discord = require("discord.js");
const client = new Discord.Client();
const { prefix } = require('./config.json');


// This section is completly used for Var properties only
//REMINDER somethings may be in the settings file



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', async message => {
  
    if (message.content === '${prefix}ping') {
        message.channel.send('Pong :ping_pong:!.');
    }

else if (message.content === '${prefix}info') {
    message.reply('Display bot info here');
    
  }
else if (message.content === '&avatar') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
}

else if (message.content === '${prefix}server') {
  message.channel.send('The curent server is: ${message.guild.name}');
///So lets start with this. What exactly are you trying to do here?
  
}
// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
channel.send(`Welcome to the server, ${member}`);
});
 
});

client.login(process.env.TOKEN);


