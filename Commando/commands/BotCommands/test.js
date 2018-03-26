const { Command } = require('discord.js-commando');

module.exports = class ReplyCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'test',
            aliases: ['t'],
            group: 'bc',
            memberName: 'test',
            description: 'Bot Test. Only the owner can run this-',
            examples: ['Test'],
            throttling: {
                usages: 1,
                duration: 10
            }
        })
    }
    hasPermission(msg) {
        if (!this.client.isOwner(msg.author)) return 'Only for the Bot Owner!' 
        return true;
    }
async run(msg) {
    const message = await msg.say('Test start');
    return message.edit('Test succes')
   }
}