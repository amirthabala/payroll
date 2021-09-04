const Reimbursment = require("../models/reimbursment")
const Company = require("../models/company")

exports.createReimbursment = async (req, reply) => { 
    try { 
        const reimbursment = new Reimbursment(req.body)   
        console.log(reimbursment)    
        await reimbursment.save()
        
        //get remimbursment by companyID
        const Allreimbursment = await Reimbursment.find({employeeId : reimbursment.employeeId});
        reply.send(Allreimbursment); 
    } 
    catch(error){
        reply.send ({ "error" : 'Creation Failed' })    
    } 
}

exports.viewCompanyReimbursmentList = async (req,reply)=>{
    const id=req.params.companyId;
    try{
        const company = await Company.findById(id);
        
        reply.send(company.reimbursmentArray)
    }
    catch(error){
        reply.send({"error": "could not fetch reimbursment"})
    }
}

exports.viewAllReimbursment = async (req, reply) => { 
    try { 
        const reimbursment= await Reimbursment.find();
        reply.send(reimbursment);
    } 
    catch(error){
        reply.send ({ "error" : 'View Failed' })    
    } 
}

exports.viewCompanyReimbursment= async (req,reply) => {
    const id=req.params.companyId;
    
    try{
        const reimbursment = await Reimbursment.find({companyId:id});
        reply.send(reimbursment);
    }
    catch(error){
        reply.send ({ "error" : 'View Failed' })    
    } 
}

exports.viewEmployeeReimbursment = async (req,reply) => {
    const id=req.params.employeeId;
    
    try{
        const reimbursment = await Reimbursment.find({employeeId : id});
        reply.send(reimbursment);
    }
    catch(error){
        reply.send ({ "error" : 'View Failed' })    
    } 
}


exports.editReimbursment= async (req,reply)=>{
    try{
        const id = req.params.id;
        const updatedreimbursment = await Reimbursment.findByIdAndUpdate(id,{ $set:req.body},{new:true,useFindAndModify:false})
        
        if(updatedreimbursment.status=="Approved"){
            //updating salary of employee
            const employee = await Employee.findById(updatedreimbursment.employeeId)
            await Employee.findByIdAndUpdate(updatedreimbursment.employeeId,{ $set:{salary : employee.salary+updatedreimbursment.amount}},{new:true,useFindAndModify:false}) 
            //updating netpay of company
            const company = await Employee.findById(updatedreimbursment.companyId)
            await Employee.findByIdAndUpdate(updatedreimbursment.companyId,{ $set:{salary : company.employeeNetPay+updatedreimbursment.amount}},{new:true,useFindAndModify:false}) 
        }
        
        //get remimbursment by companyID
        const reimbursment = await Reimbursment.find({companyId:updatedreimbursment.companyId});
        reply.send({reimbursment,"message":"updated succesfully"});
    }
    catch(error){
        reply.send ({ "error" : 'Update Failed' })    
    } 
}

exports.deleteReimbursment = async (req,reply)=>{
    try{
        const id=req.params.id;
        const deletedreimbursment=await Reimbursment.findByIdAndRemove(id,{new:true,useFindAndModify:false})
        console.log("delete");
        reply.send({deletedreimbursment,"error":"Your company is deleted successfully"});
    }
    catch(error){
        reply.send ({ "error" : 'Deletion Failed' })    
    } 
}
