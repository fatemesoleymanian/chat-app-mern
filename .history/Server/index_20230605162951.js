require('dotenv').config();
const express = require('express');
const app = express();

//connect to db
const connectDB = require('./DB/connect');


//routers
const ChatRouter = require('./src/routes/ChatRouter');
const UserRouter = require('./src/routes/UserRouter');
const MessageRouter = require('./src/routes/MessageRouter');

app.get('/', (req, res) => {
    res.send('<h1>Live chat API</h1>');
});

app.use('/api/v1/chat', ChatRouter);
app.use('/api/v1/user', UserRouter);
app.use('/api/v1/message', MessageRouter)


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