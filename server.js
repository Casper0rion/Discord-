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

   


else if (msg.content === '${prefix}info') {
    msg.reply('Display bot info here');
    
  }



 
else  if (message.content === '&avatar') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }

else if (message.content === '${prefix}server') {
  message.channel.send('The curent server is: ${message.guild.name}');
///So lets start with this. What exactly are you trying to do here?
  
};

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);



//Trying to optmize it better so that the code runs all as one request sot that it doesnt pull a request every time
  //Let me show you how I wrote mine below.
  
  const Discord = require("discord.js");

const client = new Discord.Client();
 
const config = require("./config.json");

client.on("ready", () => {
  
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 

  client.user.setActivity(`on ${client.guilds.size} servers`);
});

client.on("guildCreate", guild => {

  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setGame(`on ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => {
 
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setGame(`on ${client.guilds.size} servers`);
});


client.on("message", async message => {
 
  if(message.author.bot) return;
 
  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  //This is how you do that then, you have config.json set up, so dont worry there, the code above defines the word command. 
  //also yes. 
  
  // thats what im trying to avoid 
  //hmmm mine is not working guess ill mess with it latter thx
  
  































client.login(config.token);