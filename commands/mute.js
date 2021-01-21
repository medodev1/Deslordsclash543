const Discord = require('discord.js')
module.exports = {
    name: 'mute',
    description: "this is a mute command!",
    aliases: ['m'],
    usage: '[@user] [reason if you want]',
    category: 'Admins',
    execute(message, args){
        if (!message.member.hasPermission("MANAGE_ROLES")) {
            return}
  const embed = new Discord.MessageEmbed()
    .setDescription(`❗Could not find the user`)
    .setColor(0xe10000)
 const embed2 = new Discord.MessageEmbed()
    .setDescription(`❗ You can't mute your self`)
    .setColor(0xe10000)
 const embed3 = new Discord.MessageEmbed()
    .setDescription(`❗You can't mute me`)
    .setColor(0xe10000)
 const embed4 = new Discord.MessageEmbed()
    .setDescription(`❗Mute role is missed`)
    .setColor(0xe10000)

    
    let user = message.mentions.members.first()
    if(!user) return message.channel.send(embed)
    if(message.author.id === user.id) {return message.channel.send(embed2)}
        if(message.mentions.users.first().id === "717517061374476329") { return message.channel.send(embed3)}  
    let muterole = message.guild.roles.cache.find(rl => rl.name === 'Muted')
    if(!muterole) return message.channel.send(embed4)
    const embed5 = new Discord.MessageEmbed()
    .setDescription(`❗${user.displayName} is already muted`)
    .setColor(0xe10000)
    if(user.roles.cache.get(muterole.id)) return message.channel.send(embed5)   
    let reason = args.slice(1).join(" ")
    const embed6 = new Discord.MessageEmbed()
    .setDescription(`✅${user.displayName} was muted permanently by ${message.author.username}`)
    .setColor(0x00ff30)
    if(!reason) {return user.roles.add(muterole).then(message.channel.send(embed6))}    
   
const embed7 = new Discord.MessageEmbed()
.setDescription(`✅${user.displayName} was muted permanently by ${message.author.username} for reason \`${reason}\``)
.setColor(0x00ff30)
message.channel.send(embed7)
user.roles.add(muterole)

    }
}