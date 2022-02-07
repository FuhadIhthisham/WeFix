const express = require('express')
const asyncHandler = require('express-async-handler')
const adminHelper = require('../helpers/adminHelper')
const generateToken = require('../utils/generateToken')

const adminHome = asyncHandler(async (req, res) => {
    res.status(200).json({message:'This is Home Page'})
})

const adminLogin = asyncHandler(async (req, res) => {
    adminHelper.loginAdmin(req.body).then((result)=>{
        if(result.admin){
            result.admin.token = generateToken(result.admin._id)
            delete result.admin._id
            res.status(200).json(result.admin)
        }
        else if(result.loginFail) {
            res.status(401).json({message: 'Invalid Email or Password !'})    
        }
    })
})


module.exports = { adminHome, adminLogin }