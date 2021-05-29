module.exports = {
    name: 'ping',
    description: 'this is a ping command',
    execute(message, args){

        message.delete();

        message.channel.send('pong!');
    }
}