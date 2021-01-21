const Discord = require('discord.js')
module.exports = {
    name: 'avatar',
    description: "shows you your profile picture",
    aliases: ['av'],
    usage: '[@user]',
    category: 'General',
    cooldown:'3',
    execute(message ,args){
      
    var mentionned = message.mentions.users.first();
    var getvalueof;
    var bot;
    if(mentionned) {
      getvalueof = mentionned;
    } else {
      getvalueof = message.author;
    }
    let avatar = new Discord.MessageEmbed()
    .setTitle(`${getvalueof.username}`)
    .setImage(`${getvalueof.displayAvatarURL({ size : 4096 , dynamic: true})}`)
    .setFooter(`requsted by ${message.author.tag}`)
    .setColor(0xffde00)
    message.channel.send(avatar);
    }
}