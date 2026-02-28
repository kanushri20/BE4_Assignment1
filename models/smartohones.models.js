const mongoose = require('mongoose')
const { applyTimestamps } = require('./employees.models')

const phoneSchema = mongoose.Schema({
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    releaseYear: {
        type: Number,
        required: true
    },
    operatingSystem :{
        type: String,
        enum: ['iOS', 'Android', 'Windows', 'Other']
    },
    displaySize: {
        type: String,
        enum: [ '5.5 inches', '6.2 inches', '6.7 inches']
    },
    storage: {
        type: String,
        enum: [ '64GB', '128GB', '256GB']
    },
    ram: {
        type: String,
        enum: ['4GB', '6GB', '8GB']
    },
    cameraSpecs: [
        {type: String}
    ],
    batteryCapacity: {
        type: String,
        enum: ['4000mAh', '5000mAh']
    },
    connectivity: [
        {type: String,
            enum: ['4G LTE', '5G', 'Wi-Fi', 'Bluetooth', 'NFC']
        }
    ],
    price: {
        type: Number
    },
    colorsAvailable: [
        {type: String}
    ],
    features: [
        {type: String}
    ]
}, {
    timestamps: true
})

const Phone = mongoose.model("Phone",  phoneSchema)

module.exports = Phone