const express = require('express');
const app = express();

//routers
const authRouter = require('./routes/AuthRouter');


app.use('/api/v1/auth', authRouter)


const port = process.env.PORT || 5000;


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