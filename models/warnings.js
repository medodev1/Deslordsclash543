const mongoose = require("mongoose");


const Schema2 = new mongoose.Schema({
guildid: String,
user: String,
content: Array,


})
 module.exports = mongoose.model("warnings", Schema2);

 mongoose.connection.on('connected', () => {
    console.log('Warnings connected!');
});

mongoose.connection.on('err', err => {
    console.error(`Warnings connection error: \n${err.stack}`);
});

mongoose.connection.on('disconnected', () => {
    console.warn('Warnings connection lost');
});
