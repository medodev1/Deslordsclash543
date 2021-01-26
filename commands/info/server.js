const Discord = require('discord.js')
module.exports = {
    name: 'server',
    description: "shows you information about your current guild",
    aliases: ['srvr'],
    usage: '',
    category: 'info',
    cooldown:'10',
    run : async(client, message, args) => {
       
        const Embed2 = new Discord.MessageEmbed()
        .setTitle(`${message.guild.name}`)
        .addField(':name_badge: Server Name' , `${message.guild.name}`, true)
        .addField(':crown: Server Owner',`${message.guild.owner}`, true)
        .addField(':closed_lock_with_key: Roles Count', `${message.guild.roles.cache.size} \n`, true)
        .addField(':busts_in_silhouette: All Members', `${message.guild.memberCount}`,true)
        .addField(':detective: Total Members', message.guild.members.cache.filter(member => !member.user.bot).size, true)
        .addField(':robot: Total Bots',message.guild.members.cache.filter(member => member.user.bot).size, true)
        .addField(':scroll:  total channels', `${message.guild.channels.cache.size}`, true)
        .addField(':page_facing_up: Text Channels', message.guild.channels.cache.filter(ch => ch.type === 'text').size, true)
        .addField(':mega: Voice Channels', message.guild.channels.cache.filter(ch => ch.type === 'voice').size, true)
        .addField(':earth_africa: Region', `${message.guild.region}`, true)
        .addField(':calendar: Created On', message.guild.createdAt.toLocaleString(), true)
        .setThumbnail(message.guild.iconURL())
        .setColor(0x00ffd8)
        message.channel.send(Embed2);
    

    }
}