const { Command } = require('discord.js-commando');

module.exports = class ShipCommand extends Command {
    constructor(client){
        super(client, {
            name: 'ship',
            memberName: 'ship',
            group: 'gc',
            description: 'I can ship someone or something for you',
            examples: ['??ship Nico and Dahyun. I will ship them as an 100%!'],
            args: [
                {
                    key: 'ship',
                    prompt: 'What do you want me to ship?',
                    type: 'string',
                    validate: text => {
                        if (text.length < 201) return true;
                        return 'Your message is too large. Please use an smaller one. It should\'nt be higher than 200 characters!';
                    }
                }
            ]
        })
    }
     async run(msg, args){
         var list = ['0', '5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100']
         var rand = Math.floor(Math.random() * list.length);
        msg.channel.send(`I ship them as a  ${list[rand]}%`)
     }
}