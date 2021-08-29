const Employee = require("../models/employee")

exports.createEmployee = async (req, reply) => { 
    try { 
        const employee = new Employee(req.body)   
        console.log(employee)    
        return employee.save() 
    } 
    catch (error) { throw error } 
}

exports.viewAllEmployee = async (req, reply) => { 
    try { 
        const employee= await Employee.find();
        reply.send(employee);
    } 
    catch (error) { throw error } 
}

exports.viewEmployee= async (req,reply) => {
    const id=req.params.id;
    
    try{
        const employee=await Employee.findById(id);
        reply.send(employee);
    }
    catch (error) {
        throw error
    }
}

exports.viewEmployeeEmail = async (req,reply) => {
    const email=req.params.email;
    
    try{
        const employee=await Employee.findOne({employeeEmail : email});
        reply.send(employee);
    }
    catch (error) {
        throw error
    }
}


exports.editEmployee= async (req,reply)=>{
    try{
        const id = req.params.id;
        const updatedEmployee = await Employee.findByIdAndUpdate(id,{ $set:req.body},{new:true,useFindAndModify:false})
        reply.send({updatedEmployee,"message":"Your Company Is Updated Successfully"})
    }
    catch(error){
        throw error
    }
}

exports.deleteEmployee = async (req,reply)=>{
    try{
        const id=req.params.id;
        const deletedEmployee=await Employee.findByIdAndRemove(id,{new:true,useFindAndModify:false})
        console.log("delete");
        reply.send({deletedEmployee,"error":"Your company is deleted successfully"});
    }
    catch(error){
        throw error
    }
}
