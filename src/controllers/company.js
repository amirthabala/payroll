const Company = require("../models/company")

exports.createCompany = async (req, reply) => { 
    try { 
        const company = new Company(req.body)   
        console.log(company)    
        return company.save() 
    } 
    catch (error) { throw error } 
}

exports.viewAllCompany = async (req, reply) => { 
    try { 
        const companies= await Company.find();
        reply.send(companies);
    } 
    catch (error) { throw error } 
}

exports.viewCompany= async (req,reply) => {
    const id=req.params.id;
    
    try{
        const company=await Company.findById(id);
        reply.send(company);
    }
    catch (error) {
        throw error
    }
}

exports.viewCompanyEmail = async (req,reply) => {
    const email=req.params.email;
    
    try{
        const company=await Company.findOne({companyEmail : email});
        reply.send(company);
    }
    catch (error) {
        throw error
    }
}


exports.editCompany= async (req,reply)=>{
    try{
        const id = req.params.id;
        const updatedCompany = await Company.findByIdAndUpdate(id,{ $set:req.body},{new:true,useFindAndModify:false})
        reply.send({updatedCompany,"message":"Your Company Is Updated Successfully"})
    }
    catch(error){
        throw error
    }
}

exports.deleteCompany = async (req,reply)=>{
    try{
        const id=req.params.id;
        const deletedCompany=await Company.findByIdAndRemove(id,{new:true,useFindAndModify:false})
        console.log("delete");
        reply.send({deletedCompany,"error":"Your company is deleted successfully"});
    }
    catch(error){
        throw error
    }
}
