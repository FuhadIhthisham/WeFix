const express = require("express");
const cors = require("cors");

const env = require("dotenv");
env.config();

const userRouter = require('./routes/userRouter')
const workerRouter = require('./routes/workerRouter')

const db = require("./config/connection");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors({
    origin: ['http://localhost:3001','http://localhost:3002'],
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", userRouter)
app.use("/worker", workerRouter)


// MongoDB connection
db.connect((err)=>{
    if(err){
        console.log('Connection error' + err)
    }
    else {
        console.log("Database connected to PORT 27017")
    }
})

app.listen(PORT, ()=>{
    console.log(`Server listening on ${PORT}`)
})

module.exports = app