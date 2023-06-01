const mongoose = require('mongoose')

const inventSchema = new mongoose.Schema({
    _id: Number,
    sku: String,
    description:String,
    instock: Number,

})


const inventModel = mongoose.model('invents', inventSchema)

module.exports = {inventModel}
