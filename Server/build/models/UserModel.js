"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, 'Please provide name.'],
        unique: true,
        minlength: 3,
        maxlength: 50,
    },
    email: {
        type: String,
        required: [true, 'Please provide email.'],
        unique: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email',
        ]
    },
    password: {
        type: String,
        required: [true, 'Please provide password.'],
        minlength: 6,
    }
}, {
    timestamps: true
});
UserSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        //hash password with bcrypyjs before inserting
        const salt = yield bcryptjs.genSalt(10);
        this.password = yield bcryptjs.hash(this.password, salt);
        next();
    });
});
UserSchema.methods.getName = function () {
    return this.name;
};
UserSchema.methods.getEmail = function () {
    return this.email;
};
UserSchema.methods.createJWT = function () {
    return jwt.sign({
        userId: this._id,
        name: this.name
    }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_LIFETIME
    });
};
UserSchema.methods.comparePassword = function (candidatePassword) {
    return __awaiter(this, void 0, void 0, function* () {
        const isMatch = yield bcryptjs.compare(candidatePassword, this.password);
        return isMatch;
    });
};
module.exports = mongoose_1.default.model('User', UserSchema);
