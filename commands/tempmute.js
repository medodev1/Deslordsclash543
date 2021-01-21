const Discord = require('discord.js');
const ms = require('ms')

module.exports = {
    name: 'tempmute',
    description: "mute someone for spesifc time",
    aliases: ['tmute','tm'],
    usage: '[@user] [time] [reason if you want]',
    category: 'Admins',
    execute(message, args){

        
    if (!message.member.hasPermission("MANAGE_ROLES")) {
        return;
    }
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
 const embed6 = new Discord.MessageEmbed()
    .setDescription(`❗Please specify the amount of time`)
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


if(!args[1]) return message.channel.send(embed6);
    setTimeout(function(){
        user.roles.remove(muterole)
    }, ms(args[1]))
        
let reason = args.slice(2).join(" ")
const embed7 = new Discord.MessageEmbed()
.setDescription(`✅${user.displayName} was muted by ${message.author.username} for ${ms(ms(args[1]))} for no reason`)
.setColor(0x00ff30)
if(!reason) {return user.roles.add(muterole).then(message.channel.send(embed7))}

const embed8 = new Discord.MessageEmbed()
.setDescription(`✅${user.displayName} was muted by ${message.author.username}for ${ms(ms(args[1]))} for reason \`${reason}\``)
.setColor(0x00ff30)
message.channel.send(embed8)
user.roles.add(muterole)
    }
    
}
