const commando = require('discord.js-commando');

module.exports = class who extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'who',
			group: 'gc',
			memberName: 'who',
			description: 'Ask a who question and receive a random answer.',
			examples: ['who will get married in their lifetime?'],

			args: [{
				key: 'question',
				prompt: 'Ask me a who question!',
				type: 'string'
			}]
		});
	}

	async run(msg, args) {
		const random = msg.channel.guild.members.filter(member => member.presence.status === 'online').random().user;
		return msg.channel.sendMessage(`${msg.author} asked who ${args.question}. The answer is ${random.username}!`);
	}
};
