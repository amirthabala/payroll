const {createEmployee,viewAllEmployee,viewEmployee,viewEmployeeEmail,editEmployee,deleteEmployee} = require("../controllers/employee")
module.exports = async function (fastify, opts, done) {


    fastify.post('/Employee',createEmployee)

    fastify.get('/Employee',viewAllEmployee)

    fastify.get('/Employee/:id',viewEmployee)

    fastify.get('/EmployeeEmail/:email',viewEmployeeEmail)

    fastify.put('/Employee/:id',editEmployee)

    fastify.delete('/Employee/:id',deleteEmployee)

    done()
}