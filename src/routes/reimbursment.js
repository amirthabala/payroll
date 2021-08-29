const {createReimbursment,viewAllReimbursment,viewCompanyReimbursment,viewEmployeeReimbursment,editReimbursment,deleteReimbursment} = require("../controllers/reimbursment")
module.exports = async function (fastify, opts, done) {


    fastify.post('/Reimbursment',createReimbursment)

    fastify.get('/Reimbursment',viewAllReimbursment)

    fastify.get('/CompanyReimbursment/:companyId',viewCompanyReimbursment)

    fastify.get('/EmployeeReimbursment/:employeeId',viewEmployeeReimbursment)

    fastify.put('/Reimbursment/:id',editReimbursment)

    fastify.delete('/Reimbursment/:id',deleteReimbursment)

    done()
}