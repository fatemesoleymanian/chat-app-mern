// const UserModel = require('../models/UserModel');
// const jwt = require('jsonwebtoken')
// const { UnauthorizedError } = require('../errors');
import { Request, Response, NextFunction } from 'express';

const auth = async (req: Request, res: Response, next: NextFunction) => {

    //check header
    // const authHeader = req.headers.authorization;
    // if (!authHeader || !authHeader.startsWith('Bearer')) throw new UnauthorizedError('Authentication Invalid!');

    // const token = authHeader.split(' ')[1]
    // try {
    //     const payload = jwt.verify(token, process.env.JWT_SECRET)
    //     req.user = { userId: payload.userId, name: payload.name }
    //     next();
    // } catch (error) {
    //     throw new UnauthorizedError('Not authorize to access this route')
    // }
    next();
}


module.exports = auth;