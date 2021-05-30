/**
import { Command, CommandoClient, CommandoMessage } from "discord.js-commando";
import ytdl from "ytdl-core";
import videoFinder from "../../functions/videoFinder";
import validateURL from "../../functions/validateURL";

const queue = new Map();

export default class playCommand extends Command {
    constructor(client: CommandoClient) {
        super(client, {
            name: 'play',
            aliases: ["skip", "stop"],
            group: 'music',
            memberName: 'play',
            description: 'play command',
            userPermissions: ["SPEAK", "CONNECT"],
            args: [
               {
                   key: "song",
                   prompt: "What would you like to play? *(specify song name or link)*",
                   type: "string",
               },
            ],

        });
    }

    async run(message: any, agrs: any) {
        let voiceChannel = message.member?.voice.channel;
        if (!voiceChannel) return message.channel.send("You need to be in a voice channel to execute this command!");

        const server_queue = queue.get(message.guild.id);

        if( = 'play')
    }
}
/**/