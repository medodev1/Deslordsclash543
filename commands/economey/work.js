const Discord = require("discord.js")
const mongoose = require('mongoose');
const ms = require("parse-ms");
const Data = require("../../models/data");
module.exports = {
    name: 'work',
    description: "you can work every 8 hours to get from $5000 to $10000 ",
    aliases: [''],
    usage: '',
    category: 'Economey',
    run : async(client, message, args) => {
        let timeout = 28800000;
        let worked = Math.floor(Math.random()*5000) + 5000;
        
        let jobs = ["Developer", "Doctor" ,"Discord Admin","Engineer","Teacher","Civil Worker","Scientist","Cashier","Shopkeeper"]
        let job = jobs[Math.floor(Math.random()* jobs.length)]
    
        Data.findOne({
            userID: message.author.id
        }, (err, data) => {
            if(err) console.log(err);
            if(!data){
                const newData = new Data({
                    name: message.author.tag,
                    userID: message.author.id,
                    lb: "all",
                    money: worked,
                    work: Date.now(),
                })
                   newData.save().catch(err => console.log(err));
                   return message.channel.send(`congrats ${message.author.username} you got \`$${worked}\` for work as ${job}`);
            }else{
                if(timeout - (Date.now() - data.work) > 0){
                    let time = ms(timeout - (Date.now() - data.work));
    
                    return message.channel.send(`take some res and come again after \n${time.hours}h ${time.minutes}m ${time.seconds}s`);
                }else{
    
                    data.money += worked;
        
                  data.work = Date.now();
    
                  data.save().catch(err => console.log(err));
                  const embed = new Discord.MessageEmbed()
                  .setDescription(`*\`${message.author.tag}\`* you got \`$${worked}\` for work as \`${job}\``)
                  .setColor(0x02b3ff)
                  return message.channel.send(embed);
    
                }
            }
        })   
    }}
