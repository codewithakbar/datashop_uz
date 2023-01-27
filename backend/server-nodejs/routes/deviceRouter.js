const Router = require('express')
const router = new Router()
const deviceController = require('../controllers/deviceController')

router.post('/', deviceController.create)
router.get('/', deviceController.getAll)
router.put('/:id', deviceController.update)
router.get('/:id', deviceController.getOne)

module.exports = router
