const { Command } = require('discord.js-commando');

module.exports = class SayCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'say',
            aliases: ['s', 'copy'],
            group: 'fc',
            memberName: 'say',
            description: 'Replies with the text you provide.',
            examples: ['say Hi there!'],
            clientPermissions: ['MANAGE_MESSAGES'], //userPermission kann auch benutzt werden. Dann ist es für den user nicht für den bot!
            throttling: {
                usages: 1,
                duration: 10
            },
            args: [
                {
                    key: 'text',
                    prompt: 'What text would you like the bot to say?',
                    type: 'string',
                    validate: text => {
                        if (text.length < 201) return true;
                        return 'Your message is too large. Please use an smaller one. It should\'nt be higher than 200 characters!';
                    }
                }
            ]
        });    
    }

    run(msg, { text }) {
        msg.delete();
        return msg.say(text);
    }
};