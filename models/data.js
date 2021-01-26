const mongoose = require("mongoose");


const dataSchema = mongoose.Schema({
name: String,
userID: String,
lb: String,
money: Number,
daily: Number,
work: Number,

})
 module.exports = mongoose.model("Data", dataSchema);

 mongoose.connection.on('connected', () => {
    console.log('Eco connected!');
});

mongoose.connection.on('err', err => {
    console.error(`Eco connection error: \n${err.stack}`);
});

mongoose.connection.on('disconnected', () => {
    console.warn('Eco connection lost');
});
