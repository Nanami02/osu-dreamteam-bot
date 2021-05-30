import { Command, CommandoMessage, CommandoClient } from "discord.js-commando";

export default class banCommand extends Command {
  constructor(client: CommandoClient) {
    super(client, {
      name: "ban",
      aliases: ["banhammer"],
      group: "mod",
      memberName: "ban",
      description: "Ban a specific member from the server",
      userPermissions: ["BAN_MEMBERS"],
      args: [
        {
            key: 'text', // args.text
            prompt: 'You need to specify a member that you want to ban', // if none specified
            type: 'string', // a string
        },
    ],
  })
  }

  async run(message: any, args: any) {

    const member = message.mentions.users.first();
    if(member){
        const memberTarget = message.guild.members.cache.get(member.id)
        await memberTarget?.ban();
        return message.channel.send('User has been banned');
        }
  }
};