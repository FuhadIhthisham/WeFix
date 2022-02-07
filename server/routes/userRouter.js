const express = require('express')
const router = express.Router()
const { userHome, userSignup, userLogin, verifyOTP, userGoogleLogin, userGoogleSignup } = require('../controllers/userController')

router.get('/', userHome)
router.post('/signup', userSignup)
router.post('/login', userLogin)
router.post('/google-login', userGoogleLogin)
router.post('/google-signup', userGoogleSignup)
router.post('/verifyOTP', verifyOTP)

module.exports = router