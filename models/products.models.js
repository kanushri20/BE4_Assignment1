const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    prodId: String,
    productName: String,
    prodType: String,
    prodIsNew: Boolean,
    productInfo: String,
    productColors: String,
    productSize: Number,
    productPrice: Number,
    productImgUrl: String,
     
})

const Product = mongoose.model("Products", productSchema)

module.exports =Product

