const Discord = require('discord.js')
module.exports = {
    name: 'love',
    description: "love rate machine",
    aliases: [],
    usage: '[@user]',
    category: 'Fun',
    cooldown:'10',
    execute(message, args){

        if (args[0]) {
            var user = message.mentions.users.first()
            if(message.mentions.users.first().id === "708336323383263293") {
                return
            }}
        if (args[0]) {
            var user = message.mentions.users.first()
       } else {
             var user = message.author
        }
        let love = Math.floor(Math.random() * 100);
        let embed = new Discord.MessageEmbed()
        .setAuthor(`love rate machine`)
        .setDescription(`${user.tag}\n\n ${love}%`)
        .setThumbnail(user.displayAvatarURL({dynamic: true}))
        .setFooter(user.tag, user.displayAvatarURL({dynamic: true}))
        .setColor(0xff009c)
        message.channel.send(embed)
    
    
    
  
    }
}