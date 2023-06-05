import { Request, Response, NextFunction } from 'express';

const message = async (req: Request, res: Response, next: NextFunction) => {
    next()
}


module.exports = message