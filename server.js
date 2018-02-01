const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');
const { prefix, token } = require('./config.json');

// This section is completly used for Var properties only
//REMINDER somethings may be in the settings file
var online = false;


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

function alive()
{
    online = false;
}
 
client.on('message', async message => {
  ///This is where your error starts. The final } in the last line should correspond with this.
  
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
//SHould run fine now
  //just finish defines
  //Ive never tried to do that, so im going to say no. But im not entirely sure. 
  client.login(config.token);
});


//thx one more question if u dont mind
//can i call var's from .env?
//like call it in the .config
//how else are u supposed to secure the token then i just generate a new one if i need help witch i try to avoid bc i hate 
// nope i think i am good i really appreciate this. Been strugleing with this for a good bit now
//use the share button. They cant see .env with that. 
//No problem. Good luck!
//thx
