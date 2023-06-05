const mongoose = require('mongoose')


const ChatSchema = new mongoose.Schema({
    name: {
        type: String
    },
    isGroupChat: {
        type: Boolean
    },
    users: [{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:[true,'Please provide at least one user.']
    }],
    groupAdmin: {

    },
    lastMessage: {}

},
    {
        timestamps: true
    });


module.exports = mongoose.model('Chat', ChatSchema)