const mongoose = require('mongoose')


const ChatSchema = new mongoose.Schema({
    name: {
        type: String
    },
    isGroupChat: {
        type: Boolean
    },
    users: {},
    groupAdmin: {

    },
    lastMessage: {}

},
    {
        timestamps: true
    });


module.exports = mongoose.model('Chat', ChatSchema)