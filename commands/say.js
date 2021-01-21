const Discord = require('discord.js')
module.exports = {
    name: 'say',
    description: "send a message with embed ",
    aliases: [''],
    usage: '[title] [description]',
    category: 'Admins',
    execute(message, args){
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            return
        }
  message.delete()
  let desc = args.join(" ")
  const rEmbed = new Discord.MessageEmbed()
  .setAuthor(`update / announcement`)
  .setFooter(`Send by ${message.author.username}`)
  .setColor(0x84ff00)
  .setDescription(`*${desc}*`)
  message.channel.send(rEmbed)
        


    }
}