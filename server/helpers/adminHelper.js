const db = require('../config/connection')

var collections = require('../config/constants')
const { ObjectId } = require('mongodb')

module.exports = {
   
    loginAdmin: (loginData) =>{
        return new Promise(async (resolve, reject) => {
            let response = {}
            let admin = await db.get().collection(collections.ADMIN_COLLECTION).findOne(
                { 
                    email: loginData.email, 
                    password: loginData.password
                }
            )

            if(admin){
                delete admin.password
                response.admin = admin
                console.log("Admin Login Success");
                resolve(response)
            } else {
                console.log("Admin Login Failed");
                resolve({ loginFail: true })
            }
        })
    },
    
}