const e = require('express')
const asyncHandler = require('express-async-handler')
const userHelper = require('../helpers/userHelper')
const generateToken = require('../utils/generateToken')

const userHome = asyncHandler(async (req, res) => {
    res.status(200).json({message:'This is Home Page'})
})

const userSignup = asyncHandler(async (req, res) => {
    userHelper.signupUser(req.body).then((result)=>{
        if(result.emailExist){
            res.status(409).json({ message: 'Email already exist' })
        }
        else if(result.usernameExist){
            res.status(409).json({ message: 'Username already exist' })
        }
        else{
            res.status(201).json(result)
        }
    })
})

const userLogin = asyncHandler(async (req, res) => {
    userHelper.loginUser(req.body).then((result)=>{
        if(result.user){
            result.user.token = generateToken(result.user._id)
            res.status(200).json(result.user)
        }
        else if(result.loginFailed){
            res.status(401).json({message: 'Invalid Email or Password !'})    
        }
        else{
            res.status(404).json({message: 'User not Found!'})
        }
    })
})


module.exports = { userHome, userSignup, userLogin }