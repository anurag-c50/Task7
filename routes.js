const { verifyToken } = require('./auth');
const {login,auth}=require('./controller')
const router = require('express').Router();

router.post('/login',login)
router.get('/Auth',verifyToken,auth)
module.exports = router