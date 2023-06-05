const mongoose = require('mongoose')


const ChatSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide chat name.']
    },
    isGroupChat: {
        type: Boolean,
        required: [true, 'Please provide type of chat.']
    },
    users: [{
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide at least one user.']
    }],
    groupAdmin: {

    },
    lastMessage: {
        type: mongoose.Types.ObjectId,
        ref: 'Message',
        required: [true, 'Please provide the last message.']
    }

},
    {
        timestamps: true
    });


module.exports = mongoose.model('Chat', ChatSchema)