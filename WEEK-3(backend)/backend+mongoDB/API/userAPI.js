import exp from 'express'
//import UserModel to perform database operations
import {UserModel} from '../models/userModel.js'
//create a mini express (routing)
export const userApp = exp.Router();
import {hash,compare} from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { verifyToken } from '../middleware/verifyToken.js';
//user api routes



//create user
userApp.post('/users', async (req, res) => {
    //get user obj from req body
    let newuser = req.body;
    //hash password
    let hashedPassword = await hash(newuser.password, 12);
    //replace plain pass with hashed pass
    newuser.password = hashedPassword;
    //create new user doc in db
    let createdUser  = new UserModel(newuser);
    //save in db
    await createdUser.save();
    //send res
    res.status(201).send({message: "New user created"})
})

//user authentication (login) route
userApp.post('/auth', async (req, res) => {
    //get user credentials from req body
    let cred = req.body;
    //check user in db
    let user = await UserModel.findOne({name: cred.name});
    if(user==null){
        //user not found;
        res.status(404).send({message: "Invalid credentials"})
    }
    //compare passwords
    let status = await compare(cred.password, user.password);

    if(status==false){
        res.status(404).send({message: "Invalid credentials"})
    }
    //create signed token
    let signedToken = jwt.sign({name:user.name},'abcdef',{expiresIn:30});
 
        
    //save token as httponly cookie 
    res.cookie('token',signedToken,{httpOnly:true,secure:false,sameSite:'lax'})
    res.status(200).json({message:"login successful", token: signedToken});
})


//test route
userApp.get('/test', verifyToken, (req, res) => {
    res.send({message: "User API is working"})
})

//read user
userApp.get('/users',async (req, res) => {
     //read users from db
     let usersList = await UserModel.find();
     //send res
     res.status(200).send({message: "Users list", payload: usersList})
})


//read user by object id
userApp.get('/users/:id', async (req, res) => {
    //get object id from url param
    let objId = req.params.id;
    //read user from db
    let user = await UserModel.findById({objId});
    //send res
    res.status(200).send({message: "User details", payload: user})
})

//update user
userApp.put('/users/:id', async (req, res) => {
    //get object id from url param
    let objId = req.params.id;
    //get updated user data from req body
    let updatedUser = req.body;
    //update user in db
    let updatedUserDoc = await UserModel.findByIdAndUpdate(objId,{$set:{...updatedUser}},{new:true});
    //send res
    res.status(200).json({message: "User updated", payload: updatedUserDoc})
})

//delete user

userApp.delete('/users/:id', async (req, res) => {
    //get object id from url param
    let objId = req.params.id;  
    //delete user from db
    let deletedUser = await UserModel.findByIdAndDelete(objId);
    //send res
    res.status(200).json({message: "User deleted", payload: deletedUser})
})

//add products to users cart
