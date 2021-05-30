import { Command, CommandoClient, CommandoMessage } from "discord.js-commando";
import { MessageEmbed } from "discord.js";

export default class rulesde extends Command {
  constructor(client: CommandoClient) {
    super(client, {
      name: "rulesde",
      aliases: ["rde"],
      group: "mod",
      memberName: "rulesde",
      description: "rules embed germany mode",
    });
  }

  async run(message: CommandoMessage) {
    message.delete();
    const embed = new MessageEmbed()
    .setTitle('Regelwerk')
    .setThumbnail(`${message.guild?.iconURL({dynamic: true})}`)
    .setColor(0x0cfa65)
    .setDescription('**1.Beschwere dich nicht über @everyone oder @here tags. Wenn du diese nicht haben willst kannst du sie unterdrücken.** \n \n2. Bitte lese dir die Beschreibungen und angepinnten Nachrichten durch um mehr über einen Channel zu erfahren. \n \n**3. Wenn du der Meinung bist, dass du einen Mute oder Bann nicht verdient hast bitte kontaktiere mich.** \n \n4. Dem Server-Team steht es frei selber über die Strafe zu entscheiden. Egal wie es in den Regeln steht. \n \n**5. Benutz deinen gesunden Menschenverstand. Streite/Diskutiere nicht mit anderen Leuten auf dem Server.** \n \n6. Bettel nicht nach Rollen, die Rollen die dir zustehen werden dir auch gegeben. \n \n**7. Keine Laute oder "Meme"-Musik abspielen lassen.** \n \n8. Bitte diskutiert nicht über Religion, Politik oder sonstiges. Wir sind schließlich hier um Spaß zu haben! \n \n**9. Missbrauche keine Privaten Probleme um aufmerksamkeit zu bekommen.** \n \n10. Das hier ist ein deutschsprachiger Server. Das bedeutet das man hier nur Deutsch sprechen/schreiben darf. \n \n**11. Wer hätte es gedacht. Spam ist nicht erlaubt!**')
    await message.channel.send(embed);

    const embed2 = new MessageEmbed()
    .setColor(0x0cfa65)
    .setDescription('12. Andere Personen zu imitieren/zu faken ist nicht erlaubt. \n \n**13. Discord`s Offizielle Terms of Services gelten auch hier.** \n \n14. Rassismus und ähnliches wird hier unter keinen Umständen geduldet. \n \n**15. Eigenwerbung und auch sonstige Werbung stinkt 20km gegen den Wind.** \n \n16. Memes die Nacktheit Tierquälerei oder ähnliches veranschaulichen sind strikt verboten! \n \n**17. Raiden ist verboten. Auch Witze werden hier ernstgenommen und dementsprechend behandelt!** \n \n18. das Verkaufen von bspw. Discord Nitro ist hier nicht erlaubt und wird mit einem sofortigem Permanenten Bann bestraft! \n \n**19. Zweitaccounts sind hier nicht erlaubt!** \n \n20. DDoS Attacken sind illegal und genauso werden sie auch hier behandelt und im ernstfall auch zur Anzeige gebracht. \n \n**21. Der versuch eine Strafe zu umgehen, wird mit einem Permanenten Bann bestraft!**')
    await message.channel.send(embed2);

    const embed3 = new MessageEmbed()
    .setColor(0x0cfa65)
    .setDescription('22. Der Verkauf von sämtlichen Dingen ist verboten. Sind hier schließlich nicht bei Ebay. \n \n**23. Es wird empfohlen Gespräche über das Alter zu unterlassen. Denn eine Person unter 13 Jahren verstößt gegen Discord`s TOS und wird somit permanent Gebannt.** \n \n24. Tagged/Pingt mich bitte nicht ohne Grund. Danke \n \nDanke das du dir die Zeit genommen hast die Regeln zu lesen. \:thumbsup: \nJeder regelbruch wird mit einem Mute/Kick/Bann bestraft je nach Härte.')
    .setFooter('osu!dreamteam Bot | Programmiert von Nanami | Nanami#9756', 'https://cdn.discordapp.com/attachments/688871189401436261/827556802136244224/Discord_PB.jpg')
    return await message.channel.send(embed3);
  }
};