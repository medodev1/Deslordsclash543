const Discord = require("discord.js")
const mongoose = require('mongoose');
const Data = require("../models/data");
const { prefix } = require('../config.json');
module.exports = {
    name: 'pay',
    description: "pay money to someone",
    aliases: [],
    usage: '[@user] [amount]',
    category: 'General',
    execute(message, args, client){

        let user = message.mentions.members.first();
        const embed = new Discord.MessageEmbed()
        .setDescription(`❗Sorry, couldn't find that user.`)
        .setColor(0xe10000)
     const embed2 = new Discord.MessageEmbed()
        .setDescription(`❗You can\'t pay yourself`)
        .setColor(0xe10000)
     const embed3 = new Discord.MessageEmbed()
        .setDescription(`❗You can\'t pay me`)
        .setColor(0xe10000)
     const embed4 = new Discord.MessageEmbed()
        .setDescription(`❗you don\'t have money to send`)
        .setColor(0xe10000)
     const embed5 = new Discord.MessageEmbed()
        .setDescription(`❗please write the amount of money you want to pay`)
        .setColor(0xe10000)
     const embed6 = new Discord.MessageEmbed()
        .setDescription(`❗You don\'t have that much money.`)
        .setColor(0xe10000)
    const embed7 = new Discord.MessageEmbed()
        .setDescription(`❗You can\'t pay less then $100`)
        .setColor(0xe10000)  
    const embed9 = new Discord.MessageEmbed()
        .setDescription(`❗Please write the right amount`)
        .setColor(0xe10000)    

    if (!user) 
    return message.channel.send(embed);
    if(message.author.id === user.id) {return message.channel.send(embed2)}
    if(message.mentions.users.first().id === "717517061374476329") { return message.channel.send(embed3)}
    Data.findOne({
        userID: message.author.id
    }, (err, authorData) => {
        if(err) console.log(err);
        if(!authorData){
            return message.channel.send(embed4)

        }else{
            Data.findOne({
                userID: user.id
            }, (err, userData) =>{
                if(err) console.log(err);

                if(!args[1]) return message.channel.send(embed5);
                if(parseInt(args[1]) > authorData.money) return message.channel.send(embed6);
                if(parseInt(args[1]) < 100) return message.channel.send(embed7);

                if(args[1] != Math.floor(args[1])) return message.channel.send(embed9)

                if(!userData) {
                    const newData = new Data({
                        name: args[0],
                        userID: user.id,
                        lb: "all",
                        money: parseInt(args[1]),
                        daily: 0,
                    })
                    authorData.money -= parseInt(args[1]);
                       newData.save().catch(err => console.log(err));
                       authorData.save().catch(err => console.log(err));


                }else{
                    userData.money += parseInt(args[1]);
                    authorData.money -= parseInt(args[1]);
                    userData.save().catch(err => console.log(err));
                    authorData.save().catch(err => console.log(err));

                }
                const ebmbed7 = new Discord.MessageEmbed()
                .setTitle('*Resipt*')
                .addFields(
                    {name : `From:`, value:`\`${message.author.username}\``, inline: true},
                    {name : `Amount:`, value:`\`${parseInt(args[1]).toLocaleString()}\``,inline: true},
                    {name : `tips:`, value: `you can know your balance by type \`${prefix}bal\``}
                )
                .setColor(0x02b3ff)
                const embed8 = new Discord.MessageEmbed()
                .setTitle('*Resipt*')
                .setDescription(`${message.author.username} transfered \`$${parseInt(args[1]).toLocaleString()}\` to ${user.displayName}`)
                .setColor(0x02b3ff)
                return message.channel.send(embed8).then(user.send(ebmbed7));
            })
    
        }
    })

        
    }
}