const Discord = require("discord.js")
const mongoose = require('mongoose')
const Data = require("../models/data");
module.exports = {
    name: 'adminpay',
    description: "",
    aliases: ['ap'],
    usage: '',
    category: 'Owners',
    execute(message, args){
        if(message.author.id != "339180305632198666") return
        let user = message.mentions.members.first()
        if (!user) 
        return message.channel.send(`Sorry, couldn't find that user.`);
        if(message.mentions.users.first().id === "708336323383263293") { return message.channel.send("You can't pay me")}
       
        Data.findOne({
            userID: user.id
        }, (err, userData) =>{
            if(err) console.log(err);
            if(!args[1]) return message.channel.send(`please write the amount of money you want to pay`);
            if(args[1] != Math.floor(args[1])) return message.channel.send(" Please write the right amount!!")
    
            if(!userData) {
                const newData = new Data({
                    name: user.displayName,
                    userID: user.id,
                    lb: "all",
                    money: parseInt(args[1]),
                    daily: 0,
                })
                   newData.save().catch(err => console.log(err));
      
            }else{
                userData.money += parseInt(args[1]);
                userData.save().catch(err => console.log(err));
    
            }
            const embed = new Discord.MessageEmbed()
            .setDescription(`The Owner: *${message.author.username}* transfered \`$${parseInt(args[1]).toLocaleString()}\` to *${user.displayName}*`)
            .setColor(0x00ff7d)

            return message.channel.send(embed)
    
        })
        
            
        
    
       
        
    }
}