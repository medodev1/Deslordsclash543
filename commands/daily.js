const Discord = require("discord.js")
const mongoose = require('mongoose');
const ms = require("parse-ms");
const Data = require("../models/data");
module.exports = {
    name: 'daily',
    description: "everyday you get $500 as reward ",
    aliases: ['d'],
    usage: '',
    category: 'General',
    execute(message, args){
        let timeout = 86400000;
        let reward = 500;
    
        Data.findOne({
            userID: message.author.id
        }, (err, data) => {
            if(err) console.log(err);
            if(!data){
                const newData = new Data({
                    name: message.author.tag,
                    userID: message.author.id,
                    lb: "all",
                    money: reward,
                    daily: Date.now(),
                })
                   newData.save().catch(err => console.log(err));
                   return message.channel.send(`congrats ${message.author.username} you got \`$${reward}\` as daily reward`);
            }else{
                if(timeout - (Date.now() - data.daily) > 0){
                    let time = ms(timeout - (Date.now() - data.daily));
    
                    return message.channel.send(`You already collected your daily reward! Collect again in \n**${time.hours}h ${time.minutes}m ${time.seconds}s** :alarm_clock: `);
                }else{
    
                    data.money += reward;
        
                  data.daily = Date.now();
    
                  data.save().catch(err => console.log(err));
                  const embed = new Discord.MessageEmbed()
                  .setDescription(`*${message.author.tag} you got \`$500\` today don\`t forget to come again tomorrow*`)
                  .setColor(0x02b3ff)
                  return message.channel.send(embed);
    
                }
            }
        })          
    }
}