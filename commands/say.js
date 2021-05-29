module.exports = {
    name: 'say',
    description: 'let the bot say whatever you want',
    execute(message, args){

        message.delete();

        const SayMessage = message.content.slice(6).trim();
        message.channel.send(SayMessage);
    }
}