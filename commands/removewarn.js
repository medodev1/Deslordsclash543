const Discord = require('discord.js')
const mongoose = require('mongoose')
const db = require('../models/warnings')
module.exports = {
    name: 'removewarn',
    description: "you can remove a single warn every time with this command",
    aliases: ['rwarn','rw'],
    usage: '[@user] [number of warn]',
    category: 'Admins',
    execute(message, args){
        if(!message.member.hasPermission('ADMINISTRATOR')) return;
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!user) return message.channel.send('User not found.')
        db.findOne({ guildid : message.guild.id, user: user.user.id}, async(err,data) => {
            if(err) throw err;
            if(data) {
                let number = parseInt(args[1]) - 1
                data.content.splice(number, 1)
                message.channel.send('deleted the warn')
                data.save()
            } else {
                message.channel.send('This user does not have any warns in this server!')
            }
        })
    }
}