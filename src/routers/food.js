const router = require('express').Router();
const foodController = require("../app/controllers/foodController");
const isAuth = require('../middleware/auth')

router.use('/', isAuth.isAuth)
router.post('/create',foodController.create);
router.delete('/delete',foodController.delete);
router.put('/update',foodController.update);
router.get('/:slug',foodController.get);

module.exports = router;