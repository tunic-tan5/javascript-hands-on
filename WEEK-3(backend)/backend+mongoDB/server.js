import exp from 'express';  
import {userApp} from './API/userAPI.js'
import {productApp} from './API/productAPI.js'
import {connect} from 'mongoose';
const app = exp();
//assigning port number
const port = 4000;
//connect to db server
async function connectDB(){
    try{
    await connect('mongodb://localhost:27017/tanDB')
    console.log("Connected to DB Server");
    //after the successful db connection then assign a port to webserver 
    app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})
    }catch(err){
        console.log("Error connecting to DB Server", err);
    }       
}
connectDB();
//body parser middleware
app.use(exp.json());
//if path starts with userapi then forward the request to userApp
app.use('/user-api', userApp);
//if path starts with productapi then forward the request to productApp
app.use('/product-api', productApp);

//should be kept at the end of all routes 
 //error handling middleware
app.use((err,req,res ,next)=>{
    res.status(400).json({
        message:"Error has occured",
        reason:err.message
    })
})