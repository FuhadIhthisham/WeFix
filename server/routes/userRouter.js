const express = require('express')
const router = express.Router()
const { userHome, userSignup, userLogin } = require('../controllers/userController')

router.get('/', userHome)
router.post('/signup', userSignup)
router.post('/login', userLogin)

module.exports = router