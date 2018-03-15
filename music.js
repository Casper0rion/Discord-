const Discord = require("discord.js");
const Music = require(`discord.js-musicbot-addon`);
const client = new Discord.Client();

var token = ``;

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

process.on(`unhandledRejection`, error =>
  console.error(`Uncaught Promise Rejection:\n ${error}`)
);

const music = new Music(client, {
  youtubeKey: "AIzaSyA618O6_eJTf9NLyfjsctwl2h1AIGVZOfo0",
  botPrefix: "&",
  maxqQueueSize: "100",
  playCmd: "play",
  leaveCmd: "leave",
  messageHelp: true,
  botAdmins: "202069208408915968",
  embedColor: `#24bce2`,
  botOwner: "202069208408915968",
  requesterName: true,
  skipCmd: "skip",
  skipHelp: "&skip skips the current song",
  leaveHelp: "This command kicks the bot from the channel",
  playHelp: "This command plays a given song from youtube",
  queueCmd: "queue",
  disablePause: false,
  disableResume: false,
  volumeCmd: `volume`,
  volumeHelp: "Use this command to change the volume of the music use 1-100",
  ownerOverMember: true,
  ownerCmd: `boss`,
  enableQueueStat: true,
  anyoneCanAdjust: true,
  anyoneCanLeave: true,
  logging: false,
  enableAliveMessage: false,
  disablePlay: false,
  disableHelp: false
});

client.login(token);
