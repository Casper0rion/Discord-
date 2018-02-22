const Discord = require("discord.js");
const client = new Discord.Client();

// This section is completly used for Var properties only
//REMINDER somethings may be in the settings file
var prefix = "&";
var token = "NDEyNjYwMTgyMzY4MjU2MDAw.DW3ZSg.8_Pa_RJruXFgmYu3R4E90hrZICg";

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", async message => {
  if (message.content === "&ping") {
    message.channel.send("Pong :ping_pong:!.");
  } else if (message.content === "&info") {
    message.reply("Display bot info here");
  } else if (message.content === "&avatar") {
    message.reply(message.author.avatarURL);
  } else if (message.content === "&server") {
    message.channel.send("The curent server is: ${message.guild.name}");
  } else if (message.content === "&Help") {
    message.channel.send(
      ```Hello my name is Glacium, I have the folloing commands &Help(Pulls up this help menu) &Info(Displays the info for the bot)&Server(Displays the server that you are curently on &Avatar(Pulls your avatar and puts it in chat) &ping(Pings a ball back to you)```
    );
  }

  // Create an event listener for new guild members
  client.on("guildMemberAdd", member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.find("name", "member-log");
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`Welcome to the server, ${member}`);
  });
});

client.login(token);
