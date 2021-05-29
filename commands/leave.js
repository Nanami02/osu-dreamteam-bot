module.exports = {
    name: 'leave',
    description: 'Bot leaves the vc its currently in',
    async execute(message, args){
        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel) return message.channel.send('You need to be in a voice channel to stop the music!');
        await voiceChannel.leave();
        await message.channel.send('okay im leaving ;-;');
    }
}