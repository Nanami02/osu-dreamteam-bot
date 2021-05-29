module.exports = {
    name:'rulesen',
    description: 'rules in english',
    execute(message, args, Discord){

    message.delete();
    const embed = new Discord.MessageEmbed()
    .setTitle('Server rules')
    .setThumbnail(message.guild.iconURL())
    .setColor(0x0cfa65)
    .setDescription('**1. Do not complain about @everyone or @here tags, if you have a problem with them, you can suppress them, simple as.** \n \n2. Please Read the Pinned Messages and descriptions in all channels for more info and Rules. \n \n**3. If you believe you do not deserve a Warning or Mute and if a staff member is abusing their roles, please contact an Admin!** \n \n4. Staff retain the right to punish for an action they deem unacceptable, regardless of if it is in the rules. If a staff member instructs you to stop, STOP immediately. Do NOT argue. \n \n**5. Use common sense, do NOT argue in the server, as well as trying to ping @everyone.** \n \n6. Do NOT ask for any roles/ranks. Appropriate roles will be assigned by the staff. \n \n**7. Do NOT ear-rape or do joke songs in Music/voice calls.** \n \n8. Please try to avoid political and religious conversations. This includes conversation about politicians, court cases, prime ministers, presidents, or country relationships etc. \n \n**9. Do NOT use personal issues for attention.** \n \n10. Use English or German for communication in main chats. This includes voice-chat too. It is so that other members can understand what you say And it is easier for the Staff to monitor the Chat. \n \n**11. Do NOT spam the server with excessive messages - this includes message, emoji, image, and spam mentioning on the server or in direct messages.**')
    message.channel.send(embed);

    const embed2 = new Discord.MessageEmbed()
    .setColor(0x0cfa65)
    .setDescription('12. Attempting to impersonate another person/user is NOT allowed under any circumstances. \n \n**13. Discord´s Official Terms of Service and Community Guidelines also apply to this server. Anyone who goes against them will be punished** \n \n14. We have a NO tolerance policy for the following: harassment, racism, sexism, homophobia, hate speech, threats, defamation or trolling or any kind of bigotry.  Refrain from swearing or talking Inappropriately and absolutely NO Drama and Do NOT be hateful to other Members. Be respectful, fair and kind to all members. Treat everyone like how you would like to be treated! (Appropriate punishments will be handed out depending on the situation) \n \n**15. Do NOT advertise in any channel or even Dm´s.** \n \n16. Absolutely NO form of nudity, lewd, or sexually explicit/gory content or memes/clips which condone animal abuse and violence is allowed! \n \n**17. Raiding of any kind is NOT allowed. If evidence is found of you planning to raid a server, stream, individual, or community, punishment will shortly follow. Do NOT gather people to raid either this server or another server. Jokes will be taken seriously.** \n \n18. NSFW (Not-Safe-For-Work) content is only allowed in NSFW Channels. \n \n**19. Alternate accounts are NOT Allowed.** \n \n20. DDoS and Doxxing is  PROHIBITED. Do NOT spread phone numbers, names, or addresses of members in this server, You WILL get BANNED. \n \n**21. Do NOT Evade Punishment. Do not try to get around a mute or a ban. Your punishment will become permanent. Leaving and rejoining the server will not work and may result in a harsher sentence.**')
    message.channel.send(embed2);

    const embed3 = new Discord.MessageEmbed()
    .setColor(0x0cfa65)
    .setDescription('22. Do NOT Sell anything in this server. \n \n**23. Do NOT talk about age in this server, because if you have mistakenly said you´re under 13, you will be permanently banned and that ban may be unappealable, even if you meant it as a joke. This is against Discord´s ToS (Terms of services), and we must follow them. This is taken seriously.**\n \n24. Do not Ping Nanami without a Reason! \n \nThank you for taking the time in reading the server rules & guidelines. \:thumbsup: \nAny violation will result in a Warning/Mute/Ban, depending on the situation.')
    .setFooter('osu!dreamteam Bot | Created by Nanami | Nanami#9756', 'https://cdn.discordapp.com/attachments/688871189401436261/827556802136244224/Discord_PB.jpg')
    message.channel.send(embed3);
    }
}