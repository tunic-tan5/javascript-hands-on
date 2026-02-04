import exp from 'express'
import {connect} from 'mongoose'
import {userRoute} from './API/userAPI.js'
import {prodRoute} from './API/productAPI.js'
//create http server
const app = exp()
const port = 4000;
//connect to mongodb database
async function connectDB()
{
    try{
        await connect("mongodb://localhost:27017/ecomDB")
        console.log("connected to db")
        app.listen(port,()=>console.log("server listenening on port 4000..."))
    }
    catch(err){}
}
connectDB()
//user body parser middleware
app.use(exp.json())
//forward req to specific APIs
app.use("/user-api",userRoute)
app.use("/product-api",prodRoute)
//error handling middleware
app.use((err,req,res,next)=>{
    res.json({
        message:"Something went wrong",
        error:err.message   
    })
})