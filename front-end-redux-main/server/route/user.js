const express = require('express')

const router = express.Router()
const {
  signin,signup, authenticateUser
} = require('../controller/login-sigup')

const {
  forgetpass, resetpass,verifypass
} = require('../controller/passwordsinfo/forget-password')



router.post('/signin', signin)
router.post('/signup', signup)
router.post('/googelauth', authenticateUser)
router.get('/password-reset/:id/:token',verifypass )
router.post('/password-reset',forgetpass )
router.post('/password-reset/:id/:token',resetpass  )

module.exports = router