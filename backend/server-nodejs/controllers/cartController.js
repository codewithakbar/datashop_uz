const {Basket} = require('../models/models')
const ApiError = require('../error/ApiError');


class CartController {
    async createCart(res, req) {
        const {id} = req.data
        const cart = await Basket.create({id})
        
        return res.json(cart)
    }

    async getCart(res, req) {
        const cart = await Basket.findAll()
        return res.json(cart)

    }

}

module.exports = new CartController()
