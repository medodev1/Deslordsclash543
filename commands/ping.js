module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    aliases: ['p'],
    usage: '',
    category: 'General',
    execute(message, args){
        message.channel.send('pong!');
    }
}