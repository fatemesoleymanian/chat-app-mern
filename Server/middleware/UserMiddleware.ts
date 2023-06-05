import { Request, Response, NextFunction } from 'express';

const user = async (req: Request, res: Response, next: NextFunction) => {
    next()
}


module.exports = user