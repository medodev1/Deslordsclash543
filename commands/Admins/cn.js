const Discord = require('discord.js')
module.exports = {
    name: 'changenickename',
    description: "set a nickname for someone you mention",
    aliases: ['cn'],
    usage: '[@user] newname',
    category: 'Admins',
    run : async(client, message, args) => {
        if (!message.member.hasPermission("MANAGE_NICKNAME")) {
            return}
            const member = message.mentions.members.first();

    if (!member) return message.channel.send("Please specify a member!");

    const arguments = args.slice(1).join(" ");

    if (!arguments) return message.channel.send("Please specify a nickname!");

    try {
      member.setNickname(arguments);
    } catch (err) {
      console.log(err);
      message.channel.send(
        "I do not have permission to set " + member.toString() + " nickname!"
      );
    }
    message.channel.send(`*${message.author.username}* you changed the nickname of \`${client.users.cache.get(member.id).username}\` to \`${arguments}\``)
  },
}