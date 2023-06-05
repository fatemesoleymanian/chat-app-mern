"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ChatSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, 'Please provide chat name.']
    },
    isGroupChat: {
        type: Boolean,
        required: [true, 'Please provide type of chat.']
    },
    users: [{
            type: mongoose_1.default.Types.ObjectId,
            ref: 'User',
            required: [true, 'Please provide at least one user.']
        }],
    groupAdmin: {
        type: mongoose_1.default.Types.ObjectId,
        ref: 'User',
        required: false
    },
    lastMessage: {
        type: mongoose_1.default.Types.ObjectId,
        ref: 'Message',
        required: [true, 'Please provide the last message.']
    }
}, {
    timestamps: true
});
module.exports = mongoose_1.default.model('Chat', ChatSchema);
