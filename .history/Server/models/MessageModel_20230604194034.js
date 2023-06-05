const mongoose = require('mongoose');


const MessageSchema = new mongoose.Schema({},
    {
        timestamps: true
    });


module.exports = mongoose.model('Message', MessageSchema);