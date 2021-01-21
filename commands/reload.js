const Discord = require('discord.js')
module.exports = {
	name: 'reload',
	description: 'Reloads a command',
	aliases: ['rl'],
	usage: '',
	category:'Owners',
	execute(message, args) {
		if(message.author.id != "339180305632198666") return 
	const embed = new Discord.MessageEmbed()
		.setDescription(`❗You didn't pass any command to reload, ${message.author.username}`)
	.setColor(0xe10000)
		if (!args.length) return message.channel.send(embed);
const commandName = args[0].toLowerCase();
const command = message.client.commands.get(commandName)
	|| message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    const embed2 = new Discord.MessageEmbed()
	.setDescription(`❗There is no command with name or alias \`${commandName}\`, ${message.author.username}`)
	.setColor(0xe10000)
if (!command) return message.channel.send(embed2);
delete require.cache[require.resolve(`./${command.name}.js`)];
try {
	const newCommand = require(`./${command.name}.js`);
	message.client.commands.set(newCommand.name, newCommand);
} catch (error) {
	console.error(error);
	   const embed3 = new Discord.MessageEmbed()
	 .setDescription(`❗There was an error while reloading a command \`${command.name}\`:\n\`${error.message}\``)
	        .setColor(0xe10000)
	message.channel.send(embed3);
}
const embed4 = new Discord.MessageEmbed()
    .setDescription(`✅Command \`${command.name}\` was reloaded!`)
    .setColor(0x00ff30)
message.channel.send(embed4);
	},  
};