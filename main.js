const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = 'd! '

const fs = require('fs');

client.commands = new Discord.Collection();

//command handler

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

//token

client.login ('ODQ4MjMyMTc2MTg5NTcxMDky.YLJnxg.Akr9HDdtAcR4Srs5naFhZmlP-Gs');

//Bot ready msg

client.once('ready', () => {
    console.log('Bot is online!');
});

//Commands

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
        
    } else if (command == 'youtube'){

    }
});