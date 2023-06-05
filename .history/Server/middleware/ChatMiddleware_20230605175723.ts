import { Request, Response, NextFunction } from 'express';

const chat = async (req: Request, res: Response, next: NextFunction) => {
    next()
}

module.exports = chat