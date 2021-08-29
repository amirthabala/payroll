const Reimbursment = require("../models/reimbursment")

exports.createReimbursment = async (req, reply) => { 
    try { 
        const reimbursment = new Reimbursment(req.body)   
        console.log(reimbursment)    
        return reimbursment.save() 
    } 
    catch (error) { throw error } 
}

exports.viewAllReimbursment = async (req, reply) => { 
    try { 
        const reimbursment= await Reimbursment.find();
        reply.send(reimbursment);
    } 
    catch (error) { throw error } 
}

exports.viewCompanyReimbursment= async (req,reply) => {
    const id=req.params.companyId;
    
    try{
        const reimbursment = await Reimbursment.find({companyId:id});
        reply.send(reimbursment);
    }
    catch (error) {
        throw error
    }
}

exports.viewEmployeeReimbursment = async (req,reply) => {
    const id=req.params.employeeId;
    
    try{
        const reimbursment = await Reimbursment.find({employeeId : id});
        reply.send(reimbursment);
    }
    catch (error) {
        throw error
    }
}


exports.editReimbursment= async (req,reply)=>{
    try{
        const id = req.params.id;
        const updatedreimbursment = await Reimbursment.findByIdAndUpdate(id,{ $set:req.body},{new:true,useFindAndModify:false})
        reply.send({updatedreimbursment,"message":"Your Company Is Updated Successfully"})
    }
    catch(error){
        throw error
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
        throw error
    }
}
