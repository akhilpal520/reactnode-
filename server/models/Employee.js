const mongoose = require ('mongoose')

const EmployeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    date: { type: Date, default: Date.now }

})
 const EmployeeModel = mongoose.model("employees" , EmployeeSchema)
 module.exports = EmployeeModel