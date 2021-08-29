const mongoose = require('mongoose')
const companySchema =new mongoose.Schema({

    //company details
    company : String,
    companyEmail : String,
    password : String,
    location : String,
    address : String,
    companyType : String,

    //pay schedule
    payDate : String,
    payRollStartFrom : String,

    //tax details
    pan : String,
    tan : String,
    aocode : String,
    taxpaymentfrequency : String,

    //Statutory
    epfnumber : String,
    empcontributionrate : String,
    empstateinsurance : String,
    proftax : String,

    //earnings and reimbursment
    earningsDocArray : [{
        earningType : String,
        amount : Number
    }],
    reimbursmentArray : [{
        type:String,
        amount:Number,
    }],
    logArray : Array

},{timestamps: true})
module.exports = mongoose.model('Company', companySchema);



