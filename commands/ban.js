const Discord = require('discord.js')
module.exports = {
    name: 'ban',
    description: "ban a member from the server",
    aliases: [],
    usage: '[@user]',
    category: 'Admins',
    execute(message, args){
        if (!message.member.hasPermission("BAN_MEMBERS")) {
            return}
            let user = message.mentions.members.first()
            if(!user) return message.channel.send('couldnt find the user')
            if(message.author.id === user.id) {return message.channel.send('you can ban your self')}
            if(message.mentions.users.first().id === "717517061374476329") { return message.channel.send('you cant ban me')}
            let reason = args.slice(1).join(" ")
            if(!reason) {return user.ban().then(message.channel.send(`${user.displayName} was banned`))}
        message.channel.send(`${user.displayName} was banned for ${reason}`)
        user.ban()

    }
}