const db = require('../config/connection')

var collections = require('../config/constants')
const { ObjectId } = require('mongodb')

const bcryptjs = require('bcryptjs')

module.exports = {

    // find worker exist or not
    workerExist: (workerData) => {
        return new Promise(async (resolve, reject)=>{
            let emailExist = await db.get().collection(collections.WORKER_COLLECTION).findOne({
                email: workerData.email 
            })

            let usernameExist = await db.get().collection(collections.WORKER_COLLECTION).findOne({
                username: workerData.username 
            })

            if(emailExist){
                resolve({emailExist: true})
            }
            else if(usernameExist){
                resolve({usernameExist: true})
            }
            else {
                resolve({workerNotExist: true})
            }
        })
    },

    // signup worker
    signupWorker: (workerData) =>{
        return new Promise(async (resolve, reject)=>{
            workerData.date = new Date()
            db.get().collection(collections.WORKER_COLLECTION).insertOne({
                username: workerData.username,
                email: workerData.email,
                password: workerData.password,
                joinDate: workerData.date
            }).then((res)=>{
                resolve({
                status: true
                })
            })
        })
    },

    loginWorker: (loginData) =>{
        return new Promise(async (resolve, reject) => {
            let response = {}

            let worker = await db.get().collection(collections.WORKER_COLLECTION).findOne({
                $or: [
                    { email: loginData.email },
                    { username: loginData.email }
                ]
            })

            if(worker){
                bcryptjs.compare(loginData.password, worker.password).then((status) => {
                    if(status){
                        delete worker.password
                        delete worker.joinDate
                        response.worker = worker
                        console.log("Login Success");
                        resolve(response)
                    } 
                    else {
                        console.log("Login Failed");
                        resolve({ loginFailed: true })
                    }
                })
            }
            else {
                console.log("worker not found");
                resolve({ notFound: true })
            }
        })
    },
    
}