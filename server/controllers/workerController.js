const express = require('express')
const asyncHandler = require('express-async-handler')
const workerHelper = require('../helpers/workerHelper')
const generateToken = require('../utils/generateToken')
const nodeMail = require('../utils/nodeMailer')
const bcryptjs = require('bcryptjs')



const workerHome = asyncHandler(async (req, res) => {
    res.status(200).json({message:'This is Home Page'})
})

var workerData
var workerOTP
const workerSignup = asyncHandler(async (req, res) => {
    var workerEmail = req.body.email
    workerHelper.workerExist(req.body).then(async(result) => {
        if(result.emailExist){
            res.status(409).json({ message: 'Email already exist' })
        }
        else if(result.usernameExist){
            res.status(409).json({ message: 'Username already exist' })
        }
        else{
            let mailRes = nodeMail(workerEmail)
            if(mailRes.mailResponse){
                const salt = await bcryptjs.genSalt(10)
                req.body.password = await bcryptjs.hash(req.body.password, salt)
                workerData = req.body
                workerOTP = mailRes.userOtp
                setTimeout(() => {
                    workerOTP = null
                }, 1000 * 60 * 2);
                res.status(200).json({status: true})
            }
            else{
                res.status(400).json({message: 'Message sent error'})
            }
        }
    })
})

const verifyOTP = asyncHandler(async (req, res) => {
    if(workerOTP === req.body.emailOTP){
        workerHelper.signupWuserorker(workerData).then((result)=>{
            res.status(201).json({success: true})
        })
    } else {
        res.status(400).json({message: 'OTP Incorrect'})
    }
    workerData = null
})

const workerLogin = asyncHandler(async (req, res) => {
    workerHelper.loginWorker(req.body).then((result)=>{
        if(result.worker){
            result.worker.token = generateToken(result.worker._id)
            delete result.worker._id
            res.status(200).json(result.worker)
        }
        else if(result.loginFailed){
            res.status(401).json({message: 'Invalid Email or Password !'})    
        }
        else{
            res.status(404).json({message: 'Worker not Found!'})
        }
    })
})


module.exports = { workerHome, workerSignup, workerLogin, verifyOTP }