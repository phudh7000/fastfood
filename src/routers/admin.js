const express = require('express')
const router = express.Router();
const isAuth = require('../middleware/auth')
const productRouter = require('./menu')
const adminController = require('../app/controllers/adminController')
const foodRouter = require('./food');


router.post('/', isAuth.checkLogin, adminController.admin)
router.get('/logout',isAuth.logout); 
router.use(isAuth.isAuth);
router.get('/', adminController.admin)
router.get('/order', adminController.orderPage)
router.use('/product', productRouter)
router.use('/food',foodRouter)


module.exports = router;