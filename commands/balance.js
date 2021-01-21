const Discord = require("discord.js")
const mongoose = require('mongoose');
const Data = require("../models/data");
module.exports = {
    name: 'balance',
    description: "your balance or someone balance",
    aliases: ['credit','bal'],
    usage: '',
    category: 'General',
    cooldown:'5',
    execute(message, args){
        if (args[0]) {
            var user = message.mentions.users.first()
            if(message.mentions.users.first().id === "717517061374476329") {
                return message.channel.send("2bb is my wealth")
              }
       } else {
         var user = message.author
        
        }
        Data.findOne({
            userID: user.id
        },(err, data) => {
            if(err) console.log(err);
            if(!data){
                const newData = new Data({
                    name:user.tag,
                    userID: user.id,
                    lb: "all",
                    money: 0,
                    daily: 0,
                })
                
    
                   newData.save().catch(err => console.log(err));
                   return message.channel.send(`**${user.tag}** have $0`);
            }else{
                const embed2 = new Discord.MessageEmbed()
                .setAuthor(user.username, user.displayAvatarURL( {dynamic: true}))
                .setDescription(`${user.tag} have \`$${data.money.toLocaleString()}\``)
                .setFooter(user.tag, user.displayAvatarURL({dynamic: true}))
                .setColor(0x02b3ff)
                return message.channel.send(embed2)
            }
    
          
        })
       
    }
}