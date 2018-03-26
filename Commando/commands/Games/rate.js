const { Command } = require('discord.js-commando');

module.exports = class RateCommand extends Command {
    constructor(client){
        super(client, {
            name: 'rate',
            memberName: 'rate',
            group: 'gc',
            description: 'I can rate someone or something for you',
            examples: ['??rate Nico. I will rate it as an 10/10!'],
            args: [
                {
                    key: 'rate',
                    prompt: 'What do you want me to rate?',
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
         var list = ['0/10', '1/10', '2/10', '3/10', '4/10', '5/10', '6/10', '7/10', '8/10', '9/10', '10/10']
         var rand = Math.floor(Math.random() * list.length);
        msg.channel.send(`I rate it as a  ${list[rand]}`)
     }
}