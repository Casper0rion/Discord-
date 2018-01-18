/*
  A ping pong bot, whenever you send "ping", it replies "pong".
*/

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

// The token of your bot - https://discordapp.com/developers/applications/me
const token = 'Mzk3NjA0NjYxMjIzMzU4NDc0.DUJY2A.uykv_RJpJKf4q0Rglx5vaUfy_9U';


client.on('ready', () => {
  console.log('I am ready!');
});


client.on('message', message => {
 
  if (message.content === 'ping') {
    message.channel.send('pong');
  }
});


client.login(token);





// Create an event listener for messages
  // Send "pong" to the same channel
// Log our bot in
// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted