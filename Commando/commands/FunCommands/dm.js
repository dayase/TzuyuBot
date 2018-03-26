const { Command } = require('discord.js-commando');

module.exports = class SayCommand extends Command {
    constructor(client){
        super(client, {
            name: 'dm',
            group: 'fc',
            memberName: 'dm',
            description: (' Sends a DM to a User'),
            examples: [' dm @User Hi there!'],
            clientPermissions: ['KICK_MEMBERS'],
            throttling: {
                usages: 1,
                duration: 10
            },
            guildOnly: true,
            args: [
                {
                    key: 'user',
                    prompt: 'Please tag the user u want me to DM!',
                    type: 'user'
                },
                {
                    key: 'content',
                    prompt: 'What should be the content of the Dm?',
                    type: 'string',
                    validate: text => {
                        if (text.length < 201) return true;
                        return 'Your message is too large. Please use an smaller one. It should\'nt be higher than 200 characters!';
                    }
                }
            ]
        });
    }
    hasPermission(msg) {
        return this.client.isOwner(msg.author);
    }
    run(msg, {user, content}) {
        return user.send(content);
    }
};