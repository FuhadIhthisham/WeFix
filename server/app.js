const express = require("express");
const cors = require("cors");

const env = require("dotenv");
env.config();

const db = require("./config/connection");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



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