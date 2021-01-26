const Discord = require('discord.js')
const mongoose = require('mongoose')
const db = require('../../models/warnings')
module.exports = {
    name: 'warn',
    description: "you can warn people with this command",
    aliases: [],
    usage: '[@user] [reason]',
    category: 'Admins',
    run : async(client, message, args) => {
        if(!message.member.hasPermission('ADMINISTRATOR')) {return}
        const embed2 = new Discord.MessageEmbed()
        .setDescription(`❗You can't warn me`)
        .setColor(0xe10000)
    const embed3 = new Discord.MessageEmbed()
    .setColor(0xe10000)
    .setDescription(`❗could't find the user`)
    const embed4 = new Discord.MessageEmbed()
    .setColor(0xe10000)
    .setDescription(`❗please specify a reason`)
    const embed = new Discord.MessageEmbed()
    .setDescription(`❗ You can't warn your self`)
    .setColor(0xe10000)
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!user) return message.channel.send(embed3)
        if(message.mentions.users.first().id === "717517061374476329") { return message.channel.send(embed2)}
        if(message.author.id === user.id) {return message.channel.send(embed)}
        let reason = args.slice(1).join(" ")
        if(!reason) return message.channel.send(embed4)
        db.findOne({ guildid: message.guild.id, user: user.user.id}, async(err, data) => {
            if(err) throw err;
            if(!data) {
                data = new db({
                    guildid: message.guild.id,
                    user : user.user.id,
                    content : [
                        {
                            moderator : message.author.id,
                            reason : reason
                        }
                    ]
                })
            } else {
                const obj = {
                    moderator: message.author.id,
                    reason : reason
                }
                data.content.push(obj)
            }
            data.save()
        });
        user.send(`${message.author.tag} warned you for ${reason}`)
        const embed21 = new Discord.MessageEmbed()
        .setDescription(`${user} has been warned for ${reason}`)
        .setColor(0x00ff30)
        message.channel.send(embed21)
    
    }
}