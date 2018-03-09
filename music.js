const ytdl = require("ytdl-core");
const Discord = require("discord.js");
const client = new Discord.Client();
const music = require(`discord.js-musicbot-addon-v2`);

var token = ``;

process.on(`unhandledRejection`, error =>
  console.error(`Uncaught Promise Rejection:\n ${error}`)
);

const music = new music(client, {
  youtubekey: `AIzaSyC71b1kiwvsdLWOoKbEfZU5MX3El4ztz4U`,
  prefix: `&`,
  maxqQueueSize: `100`,
  playCmd: `play`,
  leaveCmd: `leave`
});

client.login(token);
