const { Command } = require('discord.js-commando');

module.exports = class eightballCommand extends Command {
    constructor(client){
        super(client, {
            name: '8ball',
            aliases: ['8', 'eightball'],
            description: 'It tells u the Future',
            group: 'gc',
            examples: ['??8ball Will my Day be good? Yes'],
            memberName: 'eightball',
            throttling: {
                usages: 5,
                duration: 3
            },
            args: [
                {
                    key: 'question',
                    prompt: 'What do you want to ask the Magic 8ball?',
                    type: 'string',
                    validate: text => {
                        if (text.length < 151) return true;
                        return 'Your message is too large. Please use an smaller one. It should\'nt be higher than 150 characters!';
                    }
                }
            ]
        })
    }
    async run (message, args){
        var list = [
            'It is certain',
            'It is decidedly so',
            'Without a doubt',
            'Yes definitely',
            'You may rely on it',
            'As I see it, yes',
            'Most likely',
            'Outlook good',
            'Yes',
            'Signs point to yes',
            'Reply hazy try again',
            'Ask again later',
            'Better not tell you now',
            'Cannot predict now',
            'Concentrate and ask again',
            'Don\'t count on it',
            'My reply is no',
            'My sources say no',
            'Outlook not so good',
            'Very doubtful'
        ];
        var rand = Math.floor(Math.random() * list.length);
        message.channel.send(list[rand])
    }
}