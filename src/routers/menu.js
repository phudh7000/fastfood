const express = require("express");
const router = express.Router();
const menuController = require('../app/controllers/menuController');


router.get('/:slug',menuController.show)
router.get('/tat-ca/:page',menuController.showAll)
router.get('/food/:id',menuController.getFood)
module.exports = router;