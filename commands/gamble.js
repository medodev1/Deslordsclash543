const Discord = require("discord.js")
const mongoose = require('mongoose');
const ms = require("parse-ms");
const Data = require("../models/data");
const { prefix } = require('../config.json');
module.exports = {
    name: 'flip',
    description: "you can win easy money from this command you can gamble all you money with maximum 10,000,000 or less",
    aliases: ['gamble'],
    usage: '[amount] or .flip max or .flip all',
    category: 'fun',
    execute(message, args){
      
        const embed = new Discord.MessageEmbed()
        .setDescription(`❗you dont have money to gamble with it`)
        .setColor(0xe10000)
     const embed2 = new Discord.MessageEmbed()
        .setDescription(`❗you dont have money to gamble with it`)
        .setColor(0xe10000)
     const embed3 = new Discord.MessageEmbed()
        .setDescription(`❗how much money you want to gamble with chose from \`1\` to \`10,000,000\``)
        .setColor(0xe10000)
     const embed4 = new Discord.MessageEmbed()
        .setDescription(`❗please write the right amount`)
        .setColor(0xe10000)
     const embed5 = new Discord.MessageEmbed()
        .setDescription(`❗please write the right amount`)
        .setColor(0xe10000)
    const embed6 = new Discord.MessageEmbed()
        .setDescription(`❗you do\'nt have that much money`)
        .setColor(0xe10000)      
        Data.findOne({
            userID: message.author.id
        }, (err, data) => {
            if(err) console.log(err)
            if(!data){
                const newData = new Data({
                    name: message.author.tag,
                    userID: message.author.id,
                    lb: "all",
                    money: 0,
                    daily: 0,
                })
                   newData.save().catch(err => console.log(err));
                   return message.channel.send(embed)
            }else{

                var maxBet = 10000000;
                if(data.money <= 0) return message.channel.send(embed2)
        
                if(!args[0]) return message.channel.send(embed3)
        
                if(args[0].toLowerCase() == 'all') {args[0] = data.money;
                }else{
                    if(args[0].toLowerCase() == 'max') args[0] = maxBet;
                }
        
                try{
                    var bet = parseFloat(args[0]);
                }catch{
                    return message.channel.send(embed4)
                }

                if(bet != Math.floor(bet)) return message.channel.send(embed5)
                if(data.money < bet) return message.channel.send(embed6)
                const embed7 = new Discord.MessageEmbed()
                .setDescription(`❗you can gamble only with \`${maxBet.toLocaleString()}\` maximum`)
                .addFields(
                    {name :`tips:`, value:`tips: if you have more than \`10,000,000\` you can just type \`${prefix}flip max\``}
                )
                .setColor(0xe10000)
                if(bet > maxBet) return message.channel.send(embed7)

                let chances = ['win','lose'];
                var pick = chances[Math.floor(Math.random()* chances.length)]

                if(pick == 'lose'){
                    data.money -= bet;
                    data.save().catch(err => console.log(err));
                    return message.channel.send(`you lost \`$${bet.toLocaleString()}\``)
                }else{
                    data.money += bet;
                    data.save().catch(err => console.log(err));
                    return message.channel.send(`you won \`$${bet.toLocaleString()}\``) 
                }
                
            }
        
        })

       
      
    }
}