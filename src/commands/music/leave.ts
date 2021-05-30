import { Command, CommandoMessage, CommandoClient } from "discord.js-commando";

export default class leavecommand extends Command {
  constructor(client: CommandoClient) {
    super(client, {
      name: "leave",
      aliases: ["fuckoff"],
      group: "music",
      memberName: "leave",
      description: "tells the bot to fuck off",
    });
  }

  async run(message: CommandoMessage, args: any) {
    const voiceChannel = message.member?.voice.channel;
    if(!voiceChannel) return message.channel.send('You need to be in a voice channel to stop the music!');
    voiceChannel.leave();

    return message.channel.send('okay im leaving ;-;');
  }
};