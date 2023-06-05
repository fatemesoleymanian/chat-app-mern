require('dotenv').config();
require('express-async-errors');

import express, { Application, Response, Request } from 'express';
const app: Application = express();

//connect to db
const connectDB = require('./DB/connect');


//routers
const ChatRouter = require('./routes/ChatRouter');
const UserRouter = require('./routes/UserRouter');
// const MessageRouter = require('./routes/MessageRouter');
//Middlewares
// const notFoundMiddleware = require('./middleware/NotFoundMiddleware');
// const errorHandlerMiddleware = require('./middleware/ErrorHandlerMiddleware');
const userMiddleware = require('./middleware/UserMiddleware')
const chatMiddleware = require('./middleware/ChatMiddleware')

app.use(express.json());


app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Live chat API here!!</h1>');
});

app.use('/api/v1/chat',chatMiddleware, ChatRouter);
app.use('/api/v1/user',userMiddleware, UserRouter);
// app.use('/api/v1/message', MessageRouter)


const port = process.env.PORT || 5000;


const start = async () => {

    try {

        await connectDB(process.env.MONGO_URI)
        app.listen(port, () =>
            console.log(`Server is listening on port ${port}...`)
        );
    } catch (error) {
        console.log(error)
    }
}


start();