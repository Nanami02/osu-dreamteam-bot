import { Command, CommandoMessage, CommandoClient } from "discord.js-commando";

export default class kickCommand extends Command {
  constructor(client: CommandoClient) {
    super(client, {
      name: "kick",
      aliases: ["cya"],
      group: "mod",
      memberName: "kick",
      description: "kicks a member from the server",
      args: [
        {
            key: 'text', // args.text
            prompt: 'You need to specify someone to kick', // if none specified
            type: 'string', // a string
        },
    ],
  })
  }

  async run(message: any, args: any) {

    const member = message.mentions.users.first();
    if(member){
        const memberTarget = message.guild.members.cache.get(member.id)
        await memberTarget?.kick();
        return message.channel.send('User has been kicked');
        }
    }
  
};