import { Command, CommandoMessage, CommandoClient } from "discord.js-commando";

export default class sayCommand extends Command {
  constructor(client: CommandoClient) {
    super(client, {
      name: "say",
      aliases: ["s"],
      group: "mod",
      memberName: "say",
      description: "Copycat",
      args: [
        {
            key: 'text', // args.text
            prompt: 'What text would you like the bot to say?', // if none specified
            type: 'string', // a string
        },
    ],
  })
  }

  async run(message: CommandoMessage, args: any) {
    await message.delete();
    return message.channel.send(`${args.text}`);
  }
};
