import { Response, Request } from 'express';
const UserModel = require('../models/UserModel')
const { StatusCodes } = require('http-status-codes');
const { BadRequest, UnauthorizedError } = require('../error');

const login = (req: Request, res: Response) => {



}


const register = async (req: Request, res: Response) => {
    const { username, email, password } = req.body

    const user = await UserModel.create({ ...req.body })

    const token = user.createJWT();

    res.status(StatusCodes.CREATED).json({ user: { name: user.getName() }, token })

}

module.exports = {
    login,
    register
}