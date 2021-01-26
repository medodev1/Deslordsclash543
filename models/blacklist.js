const mongoose = require("mongoose");


const Schema3 = new mongoose.Schema({
id: String,

})
 module.exports = mongoose.model("blacklist", Schema3);

 mongoose.connection.on('connected', () => {
    console.log('blacklist connected!');
});

mongoose.connection.on('err', err => {
    console.error(`blacklist connection error: \n${err.stack}`);
});

mongoose.connection.on('disconnected', () => {
    console.warn('blacklist connection lost');
});
