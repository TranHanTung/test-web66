const mongoose  = require("mongoose");

const orderSchema = new mongoose.Schema({
    _id: Number,
    item: String,
    price:String,
    quantity:String,

})

const orderModel = mongoose.model('orders', orderSchema)

module.exports = {orderModel}
