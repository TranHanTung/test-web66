const express = require('express')
const { orderModel } = require('../models/order')

const orderRouter = express.Router()

//import db
orderRouter.post('/', async (req, res) => {
    try {
        const { _id, item, price, quantity} = req.body
        const allOrders = await orderModel.create({ _id, item, price, quantity })
        res.send(allOrders)
    } catch (error) {
        res.send('error')
    }
})

module.exports = { orderRouter }