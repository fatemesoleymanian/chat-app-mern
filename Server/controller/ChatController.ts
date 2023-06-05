import { Response, Request } from 'express';


const index = async (req:Request, res:Response) => {

    res.status(200).json({ status: true });
}

module.exports = {
    index
}