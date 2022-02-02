const express = require('express')
const asyncHandler = require('express-async-handler')
const userHelper = require('../helpers/userHelper')
const generateToken = require('../utils/generateToken')
const nodeMail = require('../utils/nodeMailer')
const bcryptjs = require('bcryptjs')


const userHome = asyncHandler(async (req, res) => {
    res.status(200).json({message:'This is Home Page'})
})

var userData
var userOTP
const userSignup = asyncHandler(async (req, res) => {
    var userEmail = req.body.email
    userHelper.userExist(req.body).then(async(result) => {
        if(result.emailExist){
            res.status(409).json({ message: 'Email already exist' })
        }
        else if(result.usernameExist){
            res.status(409).json({ message: 'Username already exist' })
        }
        else{
            let mailRes = nodeMail(userEmail)
            if(mailRes.mailResponse){
                const salt = await bcryptjs.genSalt(10)
                req.body.password = await bcryptjs.hash(req.body.password, salt)
                userData = req.body
                res.status(200).json(userData)
            }
            else{
                res.status(400).json({message: 'Message sent error'})
            }
        }
    })
})

const verifyOTP = asyncHandler(async (req, res) => {
    userHelper.signupUser(req.body).then((result)=>{
        res.status(201).json(result)
    })
})

const userLogin = asyncHandler(async (req, res) => {
    userHelper.loginUser(req.body).then((result)=>{
        if(result.user){
            result.user.token = generateToken(result.user._id)
            delete result.user._id
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