const express = require('express')
const billController = require('../app/controllers/billController')
const router = express.Router()




router.post('/add', billController.addBill)


module.exports = router;