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
Object.defineProperty(exports, "__esModule", { value: true });
const UserModel = require('../models/UserModel');
const { StatusCodes } = require('http-status-codes');
const { BadRequest, UnauthorizedError } = require('../error');
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, password } = req.body;
    if (!name || !password) {
        throw new BadRequest('Please provide username and password!');
    }
    const user = yield UserModel.findOne({ name });
    if (!user)
        throw new UnauthorizedError('There no user with such username!');
    const isPasswordCorrect = yield user.comparePassword(password);
    if (!isPasswordCorrect)
        throw new UnauthorizedError('Invalid password!');
    const token = user.createJWT();
    res.status(StatusCodes.OK).json({
        user: {
            name: user.getName(),
            email: user.getEmail(),
            _id: user._id
        }, token
    });
});
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield UserModel.create(Object.assign({}, req.body));
    const token = user.createJWT();
    res.status(StatusCodes.CREATED).json({
        user: {
            name: user.getName(),
            email: user.getEmail(),
            _id: user._id
        }, token
    });
});
module.exports = {
    login,
    register
};
