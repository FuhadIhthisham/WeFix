const db = require('../config/connection')

var collections = require('../config/constants')
const { ObjectId } = require('mongodb')

const bcryptjs = require('bcryptjs')

module.exports = {

    // find user exist or not
    userExist: (userData) => {
        return new Promise(async (resolve, reject)=>{
            let usernameExist = null
            let emailExist = await db.get().collection(collections.USER_COLLECTION).findOne({
                email: userData.email 
            })
            if(userData.username){
                usernameExist = await db.get().collection(collections.USER_COLLECTION).findOne({
                    username: userData.username 
                })
            }

            if(emailExist){
                resolve({emailExist: true})
            }
            else if(usernameExist){
                resolve({usernameExist: true})
            }
            else {
                resolve({userNotExist: true})
            }
        })
    },

    // signup user
    signupUser: (userData) =>{
        return new Promise(async (resolve, reject)=>{
            userData.date = new Date()
            db.get().collection(collections.USER_COLLECTION).insertOne({
                username: userData.username,
                email: userData.email,
                password: userData.password,
                joinDate: userData.date
            }).then((res)=>{
                resolve({
                status: true
                })
            })
        })
    },

    // google authenticate signup user
    googleSignupUser: (userData) =>{
        return new Promise(async (resolve, reject)=>{
            userData.date = new Date()
            db.get().collection(collections.USER_COLLECTION).insertOne({
                email: userData.email,
                firstName: userData.firstName,
                lastName: userData.lastName,
                googleId: userData.googleId,
                joinDate: userData.date
            }).then((res)=>{
                resolve({
                status: true
                })
            })
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

            if(user.googleId){
                resolve({ loginFailed: true })
            }

            if(user){
                bcryptjs.compare(loginData.password, user.password).then((status) => {
                    if(status){
                        delete user.password
                        delete user.joinDate
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
    },


    googleLoginUser: (loginData) =>{
        return new Promise(async (resolve, reject) => {
            let response = {}

            let user = await db.get().collection(collections.USER_COLLECTION)
                .findOne(
                    {
                        email: loginData.email ,
                        googleId: loginData.googleId
                    }
                )

            if(user){
                delete user.joinDate
                delete user.googleId
                response.user = user
                console.log("Login Success");
                resolve(response)
            }
            else {
                console.log("User not found");
                resolve({ notFound: true })
            }
        })
    },
    
}