const express = require("express")
require("dotenv").config()

const cors = require("cors")
const {connection}  = require("./config/db")
const { userRouter } = require("./router/user.router")



const {authorization} = require("./config/middleware/auth.middleware")
const { empRouter } = require("./router/emp.router")

const app = express()
app.use(cors())
app.use(express.json())

app.get("/" , (req,res)=>{
    res.send("welcome")
})


//user router
app.use("/" , userRouter)

//emp router

app.use("/" , empRouter)



app.listen(process.env.port || 8080 , async()=>{
try {
    await connection
    console.log("Database is connected")

    console.log(`${process.env.port} port is working`)
} catch (error) {
   console.log(error) 
}
  
})