const Discord = require("discord.js")
const ms = require('ms')
module.exports = {
    name: 'createinvite',
    description: "create a invite link for how many people you want from 1 to 10 for 1 hour",
    aliases: ['ci','cinvite'],
    usage: 'number',
    category: 'info',
    cooldown:'60',

    run : async(client, message, args) => {
        let maxusers = args.slice(0).join(" ")
        if(!maxusers){
          return message.channel.send('كم شخص تريد دعوته؟')
        }
        if(parseInt(args[0]) > 10) return message.channel.send(`لايمكنك دعوه اكتر من 10 اشخاص فالمرا`);
        if(args[0] != Math.floor(args[0])) return message.channel.send(`من فضلك قم بتحديد عدد المدعويين الصحيح`)
        
         message.channel.createInvite({
           thing: true,
           maxUses: maxusers,
           maxAge: 3600,
         })
         .then(invite => message.channel.send(invite.url));
         
         message.channel.send(`تم عمل رابط دعوه ل \`${maxusers}\` اشخاص لمده ساعه`)
        

    }
}
