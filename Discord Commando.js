const Commando = require('discord.js-commando');
const client = new Commando.Client();
const token = 'Mzk3NjA0NjYxMjIzMzU4NDc0.DUOu1w.bs4punNWQN3QL6MPcsLUp-lcdJc'

client.regestry.registerGroup('random', 'Random');
client.regestry.regesterCommandsIn(__dirname + "/commands")





client.login(token)