const Discord = require('discord.js')
module.exports = {
    name: "resetnickname",
    description: "removes the nickname",
    aliases: ['rcn'],
    usage: '[@user]',
    category: 'Admins',
    run : async(client, message, args) => {
        const member = message.mentions.members.first();

    if (!member) return message.channel.send("Please specify a member!");

    try {
      member.setNickname(null);
    } catch (err) {
      message.channel.send(
        "I do not have permission to reset " + member.toString() + " nickname!"
      );
    }
    message.channel.send(`nickname successfuly removed`)
  }
}