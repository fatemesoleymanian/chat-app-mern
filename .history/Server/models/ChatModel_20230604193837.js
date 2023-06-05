const mongoose = require('mongoose')


const ChatSchema = new mongoose.Schema({
    name: {},
    isGroupChat: {},
    users: {},
    groupAdmin: {

    },
    lastMessage: {}

},
    {
        timestamps: true
    });


module.exports = mongoose.model('Chat', ChatSchema)