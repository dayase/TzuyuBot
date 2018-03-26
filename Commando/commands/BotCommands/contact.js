const { Command } = require('discord.js-commando');

module.exports = class SayCommand extends Command {
    constructor(client){
        super(client, {
            name: 'contact',
            group: 'bc',
            memberName: 'contact',
            description: ('Contacts the Botowner'),
            throttling: {
                usages: 1,
                duration: 10
            },
            args: [
                {
                    key: 'content',
                    prompt: 'What should be the content of the Contact?',
                    type: 'string',
                    validate: text => {
                        if (text.length < 201) return true;
                        return 'Your message is too large. Please use an smaller one. It should\'nt be higher than 200 characters!';
                    }
                }
            ]
        });
    }
    run(msg, { content}) {
        var owner = '147401491706150912'
        return owner.send(content);
    }
};