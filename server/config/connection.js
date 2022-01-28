const mongoClient = require('mongodb').MongoClient

const state = {
    db: null
}

module.exports.connect = (done) =>{
    const url = 'mongodb://localhost:27017'
    const dbname = 'wefix'

    mongoClient.connect(url, (err, data)=>{
        if(err){
            return done(err)
        }
        state.db = data.db(dbname)
        done()
    })
}

module.exports.get = () =>{
    return state.db
}




// // Module calling
// const MongoClient = require("mongodb");
  
// // Server path
// const url = 'mongodb://localhost:27017/';
  
// // Name of the database
// const dbname = "wefix";
  
// MongoClient.connect(url, (err,client)=>{
//     if(!err) {
//         console.log("successful connection with the server");  
//     }
//     else
//         console.log("Error in the connectivity");
// })