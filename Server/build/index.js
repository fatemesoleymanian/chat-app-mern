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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
require('express-async-errors');
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
//connect to db
const connectDB = require('./DB/connect');
//routers
const ChatRouter = require('./routes/ChatRouter');
const UserRouter = require('./routes/UserRouter');
// const MessageRouter = require('./routes/MessageRouter');
//Middlewares
// const notFoundMiddleware = require('./middleware/NotFoundMiddleware');
// const errorHandlerMiddleware = require('./middleware/ErrorHandlerMiddleware');
const userMiddleware = require('./middleware/UserMiddleware');
const chatMiddleware = require('./middleware/ChatMiddleware');
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('<h1>Live chat API here!!</h1>');
});
app.use('/api/v1/chat', chatMiddleware, ChatRouter);
app.use('/api/v1/user', userMiddleware, UserRouter);
// app.use('/api/v1/message', MessageRouter)
const port = process.env.PORT || 5000;
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield connectDB(process.env.MONGO_URI);
        app.listen(port, () => console.log(`Server is listening on port ${port}...`));
    }
    catch (error) {
        console.log(error);
    }
});
start();
