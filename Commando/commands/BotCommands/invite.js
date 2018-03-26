const { Command } = require('discord.js-commando');

module.exports = class ReplyCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'invite',
            aliases: ['inv'],
            group: 'bc',
            memberName: 'invite',
            description: 'The Invite of the Bot',
            examples: ['invite'],
            throttling: {
                usages: 1,
                duration: 10
            }
        })
    }
run(msg) {
    return msg.say('```https://discordapp.com/api/oauth2/authorize?client_id=425757845858942976&permissions=1580592215&scope=bot```');
   }
}