const { Command } = require('discord.js-commando');

module.exports = class ReplyCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'reply',
            aliases: ['rep'],
            group: 'fc',
            memberName: 'reply',
            description: 'Replies with a message.',
            examples: ['reply'],
            throttling: {
                usages: 1,
                duration: 10
            }
        })
    }
async run(msg) {
    const message = await msg.say('Hello');
    return message.edit('I love u!')
   }
}