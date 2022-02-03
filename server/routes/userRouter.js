const express = require('express')
const router = express.Router()
const { userHome, userSignup, userLogin, verifyOTP } = require('../controllers/userController')

router.get('/', userHome)
router.post('/signup', userSignup)
router.post('/login', userLogin)
router.post('/verifyOTP', verifyOTP)

module.exports = router