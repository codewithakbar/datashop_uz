const Router = require('express')
const router = new Router()
const CartController = require('../controllers/cartController')

router.post('/', CartController.createCart)
router.get('/', CartController.getCart)

module.exports = router