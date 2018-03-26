const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js')

module.exports = class SupportCommand extends Command {
    constructor(client){
        super(client, {
            name: 'invite',
            aliases: ['inv'],
			group: 'bc',
            memberName: 'ivite',
			description: 'Invite to the Bot to your Server'
        })
    }
    async run(msg) {
		let embed = new RichEmbed()
            .setAuthor('Tzuyu')
            .setDescription('Bot Invite Link')
			.setColor("6a37bd")
			.addField("🔗 Invite Link:", `[Click Here](https://discordapp.com/api/oauth2/authorize?client_id=425757845858942976&permissions=1580592215&scope=bot)`)
		return msg.channel.send(embed)
	}
}
