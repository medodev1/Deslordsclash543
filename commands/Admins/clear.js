const Discord = require('discord.js');
module.exports = {
    name: 'clear',
    description: "Clear spesifc amount of message",
    aliases: ['c'],
    usage:"number",
    category: 'Admins',
    run : async(client, message, args) => {
        const embed = new Discord.MessageEmbed()
    .setDescription(`❗Please write the amount of messages to delete`)
    .setColor(0xe10000)
    
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            return
        }
        if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
            return message.channel.send(embed).then(msg => msg.delete({timeout: 5000}));
        }
        let deleteAmount;
        if (parseInt(args[0]) > 100) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]) +1;
        }
        message.channel.bulkDelete(deleteAmount, true).then(msg => msg.delete())
        .catch(err => message.channel.send(`Something went wrong... ${err}`));
        const embed2 = new Discord.MessageEmbed()
.setDescription(`✅\`${args[0]}\` messages has been deleted`)
.setColor(0x00ff30)
        message.channel.send(embed2).then(msg => msg.delete({timeout: 5000}));
    
     
    }
} 