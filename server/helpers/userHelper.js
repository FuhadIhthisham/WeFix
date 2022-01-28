const db = require('../config/connection')

var collections = require('../config/constants')
const { ObjectId } = require('mongodb')

const bcryptjs = require('bcryptjs')

module.exports = {
    // signup user
    signupUser: (userData) =>{
        return new Promise(async (resolve, reject)=>{
            let emailExist = await db.get().collection(collections.USER_COLLECTION).findOne({
                email: userData.email 
            })

            let usernameExist = await db.get().collection(collections.USER_COLLECTION).findOne({
                username: userData.username 
            })

            if(emailExist){
                resolve({emailExist: true})
            }
            if(usernameExist){
                resolve({usernameExist: true})
            }
            else {
                const salt = await bcryptjs.genSalt(10)
                userData.password = await bcryptjs.hash(userData.password, salt)

                userData.date = new Date()
                db.get().collection(collections.USER_COLLECTION).insertOne({
                    username: userData.username,
                    email: userData.email,
                    password: userData.password,
                    joinDate: userData.date
                }).then((res)=>{
                    resolve({
                    username: userData.username,
                    email: userData.email,
                    })
                })
            }

        })
    },

    loginUser: (loginData) =>{
        return new Promise(async (resolve, reject) => {
            let response = {}

            let user = await db.get().collection(collections.USER_COLLECTION).findOne({
                $or: [
                    { email: loginData.email },
                    { username: loginData.email }
                ]
            })

            if(user){
                bcryptjs.compare(loginData.password, user.password).then((status) => {
                    if(status){
                        response.user = user
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
                console.log("User not found");
                resolve({ notFound: true })
            }
        })
    }
    
}