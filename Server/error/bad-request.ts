import { CustomAPIError } from './custom-error'
import { StatusCodes } from 'http-status-codes'

class BadRequest extends CustomAPIError {
    statusCode: StatusCodes

    constructor(message: string) {
        super(message)
        this.statusCode = StatusCodes.BAD_REQUEST
    }
}

module.exports = BadRequest