const { CommandoClient, SQLiteProvider } = require('discord.js-commando');
const path = require('path');

const client = new CommandoClient({
    commandPrefix: '??',
    owner: '147401491706150912',
    disableEveryone: true
});

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['bc', 'Bot Commands'],
        ['fc', 'Fun Commands'],
        ['gc', 'Games']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'));

       client.on('ready', () => {
           console.log('Logged In!');
           client.user.setStatus('online');
           client.user.setActivity(`??help | I help ${client.users.size} online Users`)
           console.log(`I am in ${client.guilds.size} Guilds , with ${client.channels.size} Channels and ${client.users.size} online users!`)
       })
       client.login('your token');
