const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    prodBrand: String,
    prodSeries: String,
    prodId: String,
    prodModel: String,
    prodDesc: String,
    prodPrice: Number,
    prodStock: Number,
    prodWarranty: Number,
    prodOffer: Number,
    prodAssurity: Boolean,
    prodImgUrl: String,
    prodReviewNumber: Number,
    prodRatingGiven: Number,
    prodRating: Number 
})

const Product = mongoose.model("Product", productSchema)

module.exports = Product