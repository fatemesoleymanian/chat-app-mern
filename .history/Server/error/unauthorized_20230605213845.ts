import { CustomAPIError } from './custom-error'
const { StatusCodes } = require('http-status-codes')


class UnauthorizedError extends CustomAPIError {
  constructor(message: string) {
    super(message)
    this.statusCode = StatusCodes.UNAUTHORIZED
  }
}

module.exports = UnauthorizedError