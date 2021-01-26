const Discord = require('discord.js');
const moment = require('moment');

module.exports = {
    name: 'user',
    description: "shows you some information about your discord account",
    aliases: ['me'],
    usage: '',
    category: 'info',
    cooldown:'10',
    run : async(client, message, args) => {
    
 
        let userArray = message.content.split(" ");
        let userArgs = userArray.slice(1);
        let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;
    
        if (member.presence.status === 'dnd') member.presence.status = 'Do Not Disturb';
        if (member.presence.status === 'online') member.presence.status = 'Online';
        if (member.presence.status === 'idle') member.presence.status = 'Idle';
        if (member.presence.status === 'offline') member.presence.status = 'offline';
    
        let x = Date.now() - member.createdAt;
        let y = Date.now() - message.guild.members.cache.get(member.id).joinedAt;
        const joined = Math.floor(y / 86400000);
    
        const joineddate = moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss");
        let status = member.presence.status;
    
        const userEmbed = new Discord.MessageEmbed()
        .setThumbnail(member.user.displayAvatarURL({dynamic: true}))
        .setAuthor(member.user.tag, member.user.displayAvatarURL({dynamic: true}))
        .setTimestamp()
        .addFields(
            { name: ':date: Join server date:', value: `\`${joined} days ago\``, inline: true },
            { name: ' :calendar_spiral: Join date:', value:  `\`${joineddate}\``, inline: true},
            { name: ':date: Account created:', value: `\`${moment.utc(member.user.createdAt).format("dddd, MMMM Do YYYY")}\``, inline: true },)
        .addField(" :star:Status:",` \`${status}\`` , true)
        .setColor(0x00ffd8)
        .setFooter(member.user.tag, member.user.displayAvatarURL({dynamic: true}))
    
        message.channel.send(userEmbed);
    
    }
}