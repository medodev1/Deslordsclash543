const Discord = require('discord.js')
const mongoose = require('mongoose')
const db = require('../models/warnings')
module.exports = {
    name: 'warns',
    description: "you can see people warns from this command",
    aliases: [],
    usage: '[@user]',
    category: 'Admins',
    execute(message, args){
        if(!message.member.hasPermission('ADMINISTRATOR')) return;
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!user) return message.channel.send('User not found.')
        const reason = args.slice(1).join(" ")
        db.findOne({ guildid: message.guild.id, user: user.user.id}, async(err, data) => {
            if(err) throw err;
            if(data) {
                const embed = new Discord.MessageEmbed()
                .setTitle(`${user.user.tag}'s warns`)
                .setDescription(
                    data.content.map(
                        (w, i) => 
                        `\`${i + 1}\` | Moderator : ${message.guild.members.cache.get(w.moderator).user.tag}\nReason : ${w.reason}`
                    )
                )
                message.channel.send(embed)
            } else {
                message.channel.send('User has no data')
            }

        })
    }
}