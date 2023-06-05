"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const custom_error_1 = require("./custom-error");
const http_status_codes_1 = require("http-status-codes");
class UnauthorizedError extends custom_error_1.CustomAPIError {
    constructor(message) {
        super(message);
        this.statusCode = http_status_codes_1.StatusCodes.UNAUTHORIZED;
    }
}
module.exports = UnauthorizedError;
