const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

module.exports = {
    name: 'play',
    description: 'Let the bot play something in vc',
    async execute(message, args){
        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel) return message.channel.send('You need to be in a voice channel to execute this command!');
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if(!permissions.has('CONNECT')) return message.channel.send('You lack permissions to use this command!');
        if(!permissions.has('SPEAK')) return message.channel.send('You lack permissions to use this command!');
        if(!args.length) return message.channel.send('You need to specify a Song name or link!');

        const connection = await voiceChannel.join();

        const videoFinder = async (query) => {
            const videoResult = await ytSearch(query);

            return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
            
        }

        const video = await videoFinder(args.join(' '));

        if(video){
            const stream = ytdl(video.url, {filter: 'audioonly'});
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () =>{
                message.channel.send('Finished Playing!');
                voiceChannel.leave();
            });

            await message.reply(`:thumbsup: Now Playing ***${video.title}***`)
        } else {
            message.channel.send('No results found!');
        }
    }
}