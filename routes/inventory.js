const express = require('express')
const {inventModel}= require('../models/inventory')

const inventRouter = express.Router()

//import db
inventRouter.post('/create', async(req, res) => {
    try {
        const { _id, sku, description, instock } = req.body
        const inventorie = await inventModel.create({ _id, sku, description, instock })
        res.send(inventorie)
    } catch (error) {
        res.send('error')
    }
})

// get tất cả sản phẩm
inventRouter.get('/alls', async(req, res) => {
    try {
        const allProducts = await inventModel.find({})
        res.send(allProducts)
    } catch (error) {
        res.send('error')
    }
})

// lấy sản phẩm < 100
inventRouter.get('/lows', async (req, res) => {
    try {
        const query = {instock: { $lt: 100}}
        const lowProduct = await inventModel.find(query)
        res.send(lowProduct)

    } catch (error) {
        
    }
})


module.exports = {inventRouter}