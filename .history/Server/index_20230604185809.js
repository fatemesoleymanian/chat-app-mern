require('dotenv').config();
const express = require('express');
const app = express();
//routers
const ChatRouter = require('./routes/ChatRouter');

app.get('/', (req, res) => {
    res.send('<h1>Live chat API</h1>');
});

app.use('/api/v1/chat', ChatRouter)


const port = process.env.PORT ;


const start = async () => {

    try {

        // await connectDB(process.env.MONGO_URI)
        app.listen(port, () =>
            console.log(`Server is listening on port ${port}...`)
        );
    } catch (error) {
        console.log(error)
    }
}


start();