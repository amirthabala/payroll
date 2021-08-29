const { createCompany,viewAllCompany,viewCompany,editCompany,deleteCompany, viewCompanyEmail} = require("../controllers/company")
module.exports = async function (fastify, opts, done) {


    fastify.post('/Company',createCompany)

    fastify.get('/Company',viewAllCompany)

    fastify.get('/Company/:id',viewCompany)

    fastify.get('/CompanyEmail/:email',viewCompanyEmail)

    fastify.put('/Company/:id',editCompany)

    fastify.delete('/Company/:id',deleteCompany)

    done()
}