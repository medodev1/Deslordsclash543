const Discord = require('discord.js')
module.exports = {
    name: 'kick',
    description: "Kick members",
    aliases: ['k'],
    usage: '[@user]',
    category: 'Admins',
    execute(message, args){
        if (!message.member.hasPermission("KICK_MEMBERS")) {
            return}
            const embed = new Discord.MessageEmbed()
            .setDescription(`❗Could not find the user`)
            .setColor(0xe10000)
         const embed2 = new Discord.MessageEmbed()
            .setDescription(`❗ You can't kick your self`)
            .setColor(0xe10000)
         const embed3 = new Discord.MessageEmbed()
            .setDescription(`❗You can't kick me`)
            .setColor(0xe10000)
        const embed4 = new Discord.MessageEmbed()
            .setDescription(`✅user has been kicked`)
            .setColor(0x00ff30)
    const member = message.mentions.users.first();
    if(member){
        if(message.author.id === member.id) {return message.channel.send(embed2)}
        if(message.mentions.users.first().id === "717517061374476329") { return message.channel.send(embed3)} 
        const kmember = message.guild.members.cache.get(member.id);
        kmember.kick();
        message.channel.send(embed4)
        
    }else{
        message.channel.send(embed)

    }
    }
}