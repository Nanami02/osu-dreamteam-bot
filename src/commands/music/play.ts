import { Command, CommandoClient, CommandoMessage } from "discord.js-commando";
import ytdl from "ytdl-core";
import validateURL from "../../functions/validateURL";
import videoFinder from "../../functions/videoFinder";

export default class playcommand extends Command {
  constructor(client: CommandoClient) {
    super(client, {
      name: "play",
      aliases: ["p"],
      group: "music",
      memberName: "play",
      description: "Play some coolio music!",
      userPermissions: ["SPEAK", "CONNECT"],
      args: [
        {
          key: "song",
          prompt:
            "What would you like to play? *(specify a song name or link)*",
          type: "string",
        },
      ],
    });
  }   
  
  async run(message: any, args: any) {
    let voiceChannel = message.member?.voice.channel;
    if (validateURL(args.song)) {
      if (!voiceChannel) return message.channel.send("You need to be in a voice channel to execute this command!");
      const connection = await voiceChannel.join();
      const stream = ytdl(args.song, { filter: "audioonly" });
      connection.play(stream, { seek: 0, volume: 1 }).on("finish", async () => {
        voiceChannel?.leave();
        return await message.channel.send("Finished Playing!");
      });
      return await message.reply(`:thumbsup: Now Playing ***${args.song}***`);

    } else {
      const connection = await voiceChannel.join();
      const video = await videoFinder(args.song);  
      if (video) {
        const stream = ytdl(`${video?.url}`, { filter: "audioonly" });
        connection?.play(stream, { seek: 0, volume: 1 }).on("finish", () => {
          message.channel.send("Finished Playing!");
          voiceChannel?.leave();
        });
        await message.reply(`:thumbsup: Now Playing ***${video?.title}***`);
      } else {
        message.channel.send("No results found!");
      }
    }
    
    
  }
};
