const ytdl = require("ytdl-core");
const Discord = require("discord.js");
const client = new Discord.Client();
const music = require(`discord.js-musicbot-addon-v2`);

var token = ``;

process.on(`unhandledRejection`, error =>
  console.error(`Uncaught Promise Rejection:\n ${error}`)
);

const music = new music(client, {});

client.login(token);
