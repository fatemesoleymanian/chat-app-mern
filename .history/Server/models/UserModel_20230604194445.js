const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    id: {},
    name: {},
    email: {},
    password: {}
},
    {
        timestamps: true
    });


module.exports = mongoose.model('User', UserSchema)