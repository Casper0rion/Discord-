const ytdl = require("ytdl-core");
const Discord = require("discord.js");
const client = new Discord.Client();

var token = ``;

process.on(`unhandledRejection`, error =>
  console.error(`Uncaught Promise Rejection:\n ${error}`)
);

client.on(`message`, message => {
  if (message.content == `&play radio`) {
    if (message.channel.type !== `text`) return;

    const { voiceChannel } = message.member;

    if (!voiceChannel) {
      return message.reply(`You must join a voice channel!`);
    }

    voiceChannel.join().then(connection => {
      const stream = ytdl(`inseert music here`, {
        filter: `audioonly`
      });

      const dispatcher = connection.playstream(stream);

      dispatcher.on(`end`, () => voiceChannel.leave());
    });
  }
});
client.login(token);
