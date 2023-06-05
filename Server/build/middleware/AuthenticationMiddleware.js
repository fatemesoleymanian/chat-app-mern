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
const auth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
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
});
module.exports = auth;
