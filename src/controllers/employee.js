const Employee = require("../models/employee")

exports.createEmployee = async (req, reply) => { 
    try { 
        const employee = new Employee(req.body)   
        console.log(employee)    
        employee.save()
        reply.send({employee,"message":'Employee Created'}) 
    } 
    catch(error){
        reply.send ({ "error" : 'Creation Failed' })    
    } 
}

exports.viewAllEmployee = async (req, reply) => { 
    try { 
        const employee= await Employee.find();
        reply.send(employee);
    } 
    catch(error){
        reply.send ({ "error" : 'View Failed' })    
    } 
}

exports.viewEmployee= async (req,reply) => {
    const id=req.params.id;
    
    try{
        const employee=await Employee.findById(id);
        if(employee){
            reply.send(employee);
        }    
    else{
        reply.send ({ "error" : 'No Company Found' })   
    }
    }
    catch(error){
        reply.send ({ "error" : 'View Failed' })    
    } 
}

exports.viewEmployeeByCompany= async (req,reply) => {
    const companyId=req.params.companyId;
    try{
        const employee=await Employee.find({companyId:companyId});
        if(employee){
            reply.send({employee,"message":"Employee Sent"});
        }
        else{
            reply.send({employee,"message":"No Employee found for this company"})
        }
    }
    catch (error) {
        reply.send({"error":"Employee Fetch Failed"})
    }
}

exports.viewEmployeeEmail = async (req,reply) => {
    const email=req.params.email;
    
    try{
        const employee=await Employee.findOne({employeeEmail : email});
        if(employee){
            reply.send(employee);
        }    
    else{
        reply.send ({ "error" : 'No Company Found' })   
    }
    }
    catch(error){
        reply.send ({ "error" : 'View Failed' })    
    } 
}


exports.editEmployee= async (req,reply)=>{
    try{
        const id = req.params.id;
        const updatedEmployee = await Employee.findByIdAndUpdate(id,{ $set:req.body},{new:true,useFindAndModify:false}) 
        if(employee){
            reply.send({updatedEmployee,"message":"Your Company Is Updated Successfully"})
        }    
        else{
        reply.send ({ "error" : 'No Company Found' })   
        }
    }
    catch(error){
        reply.send ({ "error" : 'Update Failed' })    
    } 
}

exports.deleteEmployee = async (req,reply)=>{
    try{
        const id=req.params.id;
        const deletedEmployee=await Employee.findByIdAndRemove(id,{new:true,useFindAndModify:false})
        console.log("delete");      
        if(employee){
            reply.send({deletedEmployee,"message":"Your company is deleted successfully"});
        }    
        else{
        reply.send ({ "error" : 'No Company Found' })   
        }
    }
    catch(error){
        reply.send ({ "error" : 'Deletion Failed' })    
    } 
}
