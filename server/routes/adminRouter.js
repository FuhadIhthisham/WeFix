const express = require('express')
const router = express.Router()
const { adminHome, adminLogin } = require('../controllers/adminController')

router.get('/', adminHome)
router.post('/login', adminLogin)

module.exports = router