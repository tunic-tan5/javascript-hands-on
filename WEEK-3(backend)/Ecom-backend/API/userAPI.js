import exp from 'express'
export const userRoute = exp.Router()
import {hash,compare} from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {ProductModel} from '../Models/ProductModel.js'

//create user
import {UserModel} from '../Models/UserModel.js'

 userRoute.post('/users', async (req, res) => {
     //get user obj from req body
     let newuser = req.body;
     //run validator
     await new UserModel(newuser).validate()
     //hash password
     let hashedPassword = await hash(newuser.password, 12);
     //replace plain pass with hashed pass
     newuser.password = hashedPassword;
     //create new user doc in db
     let createdUser  = new UserModel(newuser);
     //save in db
     await createdUser.save({validateBeforeSave:false});
     //send res
     res.status(201).send({message: "New user created"})
 })

 //read user
 userRoute.get('/users',async (req, res) => {
      //read users from db
      let usersList = await UserModel.find();
      //send res
      res.status(200).send({message: "Users list", payload: usersList})
 })


//add product to users cart
userRoute.put('/user-cart/user-id/:uid/product-id/:pid', async (req, res) => {
    //get uid and pid from req params\
    let {uid, pid} = req.params;
    //check user,product
    let user = await UserModel.findById(uid);
    if(!user){
        return res.status(404).json({message: "User not found"})
    }
    let product = await ProductModel.findById(pid);
    if(!product){
        return res.status(404).json({message: "Product not found"})
    }
    //add product to users cart
    let modifiedUser = await UserModel.findByIdAndUpdate(uid, {$push: {cart:{product:pid}}}, {new: true});
    //send res
    res.status(200).json({message: "Product added to cart", payload: modifiedUser})

})
//displaying product details in user cart
//read user by id 
userRoute.get('/users/:uid', async (req, res) => {
    //get id from req params
    let {uid} = req.params;  
    //read user from db
    let user = await UserModel.findById(uid).populate('cart.product','productName price brand');
    console.log(user);
    if(!user){
        return res.status(404).json({message: "User not found"})
    }
    //send res
    res.status(200).json({message: "User data", payload: user})
});

//Add "quantity" filed  along with productId in user cart. Set the initial value of "quantity" field is 1 by default. When user adding a product to cart, it should check that product is already there in cart. If it is there , increment count by 1. If product is not there, then add new product to cart with quantity as 1
userRoute.put('/user-cart-quantity/user-id/:uid/product-id/:pid', async (req, res) => {
    //get uid and pid from req params\
    let {uid, pid} = req.params;
    //check user,product
    let user = await UserModel.findById(uid).populate('cart.product','productName price brand');
    if(!user){
        return res.status(404).json({message: "User not found"})
    }
    let product = await ProductModel.findById(pid);
    if(!product){
        return res.status(404).json({message: "Product not found"})
    }
    //check if product already in cart
    let cartItem = user.cart.find(item => item.product.toString() === pid); 
    if(cartItem){
        //increment quantity by 1
        cartItem.quantity += 1;
    }else{
        //add product to users cart with quantity 1
        user.cart.push({product: pid, quantity: 1});
    }
    //save updated user document
    await user.save();
    //send res
    res.status(200).json({message: "Product quantity updated in cart", payload: user})
})