const mongoose = require('mongoose')
const employeeSchema =new mongoose.Schema({

    companyId : String,
    employeeName : String,
    employeeEmail : String,
    password : String,
    employeeAddress : String,
    salary : Number,
    basicPay : Number,
    role : String
},{timestamps: true})
module.exports = mongoose.model('Employee', employeeSchema);