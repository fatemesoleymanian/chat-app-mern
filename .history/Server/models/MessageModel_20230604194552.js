const mongoose = require('mongoose');


const MessageSchema = new mongoose.Schema({
    sender:{},
    reciever:{},
    chat:{}
},
    {
        timestamps: true
    });


module.exports = mongoose.model('Message', MessageSchema);