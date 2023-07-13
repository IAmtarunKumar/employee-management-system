const express = require("express")
const { EmpModel } = require("../model/emp.model")

const empRouter = express.Router()



empRouter.get("/empData" , async(req,res)=>{
    let data = await EmpModel.find()
    res.send(data)
})

empRouter.post("/employees" , async(req,res)=>{
    let payload = req.body

    let user = new EmpModel(payload)
    await user.save()

    res.send({"msg" : "Employee is posted"})
})

//filter 

empRouter.get("/filter/:id" , async(req,res)=>{

    let dep = req.params.id 
    // console.log(dep)

    let data = await EmpModel.find({"department" : dep})

    res.send(data)
})


//sort

// empRouter.get("/lth" , async(req,res)=>{

    

//     let data = await EmpModel.find({}.sort({"salary" : 1}))

   

//     res.send(data)
// })






module.exports = {empRouter}