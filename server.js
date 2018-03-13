const Discord = require("discord.js");
const client = new Discord.Client();
const ytdl = require("ytdl-core");

process.on("unhandledRejection", error =>
  console.error(`Uncaught Promise Rejection:\n${error}`)
);
// This section is completly used for Var properties only
//REMINDER somethings may be in the settings file

var token = "";

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
  } else if (message.content === "&owner") {
    message.channel.send(`The owner is, <@!202069208408915968>`);
  } else if (message.content === "&server") {
    message.channel.reply(`The curent server is ${message.guild.name}`);
  } else if (message.content === "&Help") {
    message.channel.send(
      "```Hello Im Glacis We have the folloing Commands &Help, &server, &avatar, &info, &owner &ping__ Music Commands are &musichelp```"
    );
  }

  client.on("guildMemberAdd", member => {
    const channel = member.guild.channels.find("name", "member-log");
    if (!channel) return;
    channel.send(`Welcome to the server, ${member}`);
  });
});

client.login(token);
