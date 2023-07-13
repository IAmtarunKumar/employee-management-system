const mongoose =  require("mongoose")

//schema

const empSchema = mongoose.Schema({
    firstName  : String,
    lastName : String,
    email : String,
    department :String,
    salary : String
})



//model

const EmpModel = mongoose.model("employee" , empSchema)

module.exports={
   EmpModel
}