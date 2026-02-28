const mongoose = require('mongoose')

const creditCardSchema = mongoose.Schema({
    cardId: Number,
    cardNo: Number,
    cardType: String,
    cardCompanyName: String,
    cardHolderName: String,
    cardExpiry: Date,
})

const CreditCard = mongoose.model("CreditCard", creditCardSchema)

module.exports(CreditCard)