const Discord = require('discord.js')
module.exports = {
    name: 'unmute',
    description: "this is a unmute!",
    aliases: ['um'],
    usage: '[@user]',
    category: 'Admins',
    run : async(client, message, args) => {

        if (!message.member.hasPermission("MANAGE_ROLES")) {
            return      }
 const embed = new Discord.MessageEmbed()
    .setDescription(`❗Could not find the user`)
    .setColor(0xe10000)
    let user = message.mentions.members.first()
    if(!user) return message.channel.send(embed)
    if(message.author.id === user.id) {return}
    if(message.mentions.users.first().id === "708336323383263293") { return } 
    let muterole = message.guild.roles.cache.find(rl => rl.name === 'Muted')
    const embed2 = new Discord.MessageEmbed()
    .setDescription(`❗${user.displayName} is already unmuted`)
    .setColor(0xe10000)
    if(!user.roles.cache.get(muterole.id)) return message.channel.send(embed2)
    const embed3 = new Discord.MessageEmbed()
    .setDescription(`✅${user.displayName} is no longer muted`)
    .setColor(0x00ff30)
    message.channel.send(embed3)
    user.roles.remove(muterole)

    }
}