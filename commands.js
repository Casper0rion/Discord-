const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);

const Discord = require("discord.js");
const client = new Discord.Client();

// This section is completly used for Var properties only
//REMINDER somethings may be in the settings file
var prefix = "&";
var token = "NDEyNjYwMTgyMzY4MjU2MDAw.DW3ZSg.8_Pa_RJruXFgmYu3R4E90hrZICg";

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", message => {
  if (message.content === "&Help") {
    message.channel.send(
      "```Hello my name is Glacium, I have the folloing commands &Help(Pulls up this help menu) &Info(Displays the info for the bot)&Server(Displays the server that you are curently on &Avatar(Pulls your avatar and puts it in chat) &ping(Pings a ball back to you))"
    );
  }
});
