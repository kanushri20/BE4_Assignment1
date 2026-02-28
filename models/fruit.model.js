const mongoose = require('mongoose')

const fruitSchema = mongoose.Schema({
    fruitName: String,
    fruitImgUrl: String,
    fruitDesc: String,
    calories: Number,
    carbInGrams: Number,
    proteinInGrams: Number,
    unsaturatedFatsInGrams: Number
})

const Fruits = mongoose.models("Fruits", fruitSchema)

module.exports = Fruits