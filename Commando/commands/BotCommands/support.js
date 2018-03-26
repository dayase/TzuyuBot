const { Command } = require('discord.js-commando')
const { RichEmbed } = require('discord.js')

module.exports = class SupportCommand extends Command {
    constructor(client){
        super(client, {
            name: 'support',
			group: 'bc',
            memberName: 'support',
			description: 'Invite to the Bot Support Server'
        })
    }
    async run(msg) {
		if (!msg.guild) return msg.reply('This is not a guild!');
		let embed = new RichEmbed()
            .setAuthor('Tzuyu')
            .setDescription('Support Server Invite')
			.setColor("6a37bd")
			.addField("💻 Support Server:", `[Click Here](https://discord.gg/WrVzkH)`)
		return msg.channel.send(embed)
	}
}
