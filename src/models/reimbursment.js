const mongoose = require('mongoose')
const reimbursmentSchema =new mongoose.Schema({

    employeeId : String,
    companyId : String,
    type : String,
    status : String,
    amount : Number
},{timestamps: true})
module.exports = mongoose.model('Reimbursment', reimbursmentSchema);