const {Basket, BasketDevice, Device} = require('../models/models')
const ApiError = require('../error/ApiError');


class CartController {

    // Create a new Cart instance with the specified parameters
    async createCart(res, req) {
        const {id} = req.session;
        let productList = [];
        
        const cartList = await Basket.create(`cart:${id}`);

        if (!cartList) {
            return res.send(productList);
        }

        for (const itemKey of Object.keys(cartList)) {
            const product = await this.jsonGet(itemKey);

            productList.push({product: JSON.parse(product), quantity: cartList[itemKey]});
        }

        return res.send(productList);
    }


    // async deleteCart(res, req) {
    //     const {id} = req.session;


    // }


    // Get all products in the cart list
    async getCart(res, req) {
        const cart = await Basket.findAll()
        return res.json(cart)

    }


    async getOne(req, res, next) {
        const basket = await Basket.findOne({
            where: {userId: req.user.id},
            include: {
                model: BasketDevice,
                include: {
                    model: Device
                }}
        })
        return res.json(basket)
    }

}

module.exports = new CartController()
