const Discord = require('discord.js')
module.exports = {
    name: 'changenickename',
    description: "",
    aliases: ['cn'],
    usage: '[@user] newname',
    category: 'Admins',
    execute(message, args){
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            return}
            let user = message.mentions.users.first();
            if(!user) return message.channel.send('please mintion someone to change thier name')    
       let nickname = args.slice(1).join(" ");
       if(!nickname) return message.channel.send('please write the name');
        let member = message.guild.members.cache.get(user.id);
        try{
            member.setNickname(nickname)
        }catch(error){
            console.error(error);
            const embed = new Discord.MessageEmbed()
            .setDescription('Error')
            .setColor(0xe10000)
              message.channel.send(embed);
        }
        message.channel.send(`Successfully changed **${member.displayName}** nickname to **${nickname}**`);
    
    }
}