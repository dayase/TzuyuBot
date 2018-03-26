const { CommandoClient, SQLiteProvider } = require('discord.js-commando');
const path = require('path');
const sqlite = require('sqlite');
const mysql = require('mysql');

const client = new CommandoClient({
    commandPrefix: '??',
    owner: '147401491706150912',
    disableEveryone: true
});
console.log("connecting to mysql server..");
let db_config = ({
	host: 'localhost',
	user: 'root',
	password: 'sweety02',
	database: 'bot'
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
       client.login('NDI1NzU3ODQ1ODU4OTQyOTc2.DZgEsA.Yo4sxCAd7rryexZr-R8CR-tMdis');