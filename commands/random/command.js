const commando = require ("discord.js-commando")

class DiceRollCommand extends commando.Command {
  constructor(client){
    super(client, {
      name: 'roll',
      group: 'random',
      memberName: 'roll',
      description: 'Rolls A Dice'
    });
  }
                          
async run(message, args) {
  var roll = Math.floor(Math.random() * 6) + 1;
                          
}
}
module.exports = DiceRollCommand

1
                          
                          
                  
                          