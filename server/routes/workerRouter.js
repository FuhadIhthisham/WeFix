const express = require('express')
const router = express.Router()
const { workerHome, workerSignup, workerLogin, verifyOTP } = require('../controllers/workerController')

router.get('/', workerHome)
router.post('/signup', workerSignup)
router.post('/login', workerLogin)
router.post('/verifyOTP', verifyOTP)

module.exports = router