const express  = require("express");
const users=require('./user')
const fs =require("fs")
const cors = require("cors")
const {generateToken,verifyToken}=require('./auth')
const app = express()
const UserRoutes=require('./routes')
app.use(express.json())

const corsOptions ={
    origin:'http://localhost:5173', 
    credentials:true,     
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use('/api',UserRoutes)


app.listen(80,()=>{
    console.log("Server is running")
})