const mongoose = require('mongoose')

const employeesSchema = new mongoose.Schema({
    employeeName: String,
    designation: String,
    idNumber: Number,
    dob: String,
    emailId: String,
    telephoneNo: Number,
    address: String,
})

const Employee = mongoose.model('Employees', employeesSchema)

module.exports = Employee