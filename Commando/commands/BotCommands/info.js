const {
	Command
} = require('discord.js-commando');
const {
	RichEmbed
} = require('discord.js');

module.exports = class SayCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'info',
			group: 'bc',
            memberName: 'info',
			description: 'Some Bot infos.'
		});
	}

	async run(msg) {
		if (!msg.guild) return msg.reply('This is not a guild!');
		let embed = new RichEmbed()
			.setAuthor('Tzuyu')
			.setDescription('Bot Info', msg.guild.iconURL)
			.setColor("ffa735")
			.addField("Owner:", `@니코 | Dahyun 아름답다#7722 `)
			.addField("Coding Language", `<:js:427483295853314052> Discord.js-Commando`)
			.addField("VPS:", `None`)
			.addField("Storage Used:", `None`)
			.addField("Uptime:", `None`)
			.addField("Commands:", `22`)
		return msg.channel.sendEmbed(embed)
	}
};