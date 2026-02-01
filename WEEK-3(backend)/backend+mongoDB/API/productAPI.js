import exp from 'express'
import {ProductModel} from '../models/productModel.js'
//create a mini express route
export const productApp = exp.Router();
//product api routes

//create product
productApp.post('/products',async(req,res)=>{
    //get product obj from req body
    let newProduct = req.body;
    //create new product doc in db
    let createdProduct = await new ProductModel(newProduct);
    //save in db
    await createdProduct.save();
    //send res
    res.status(201).send({message:"New product created"})
})

//read products
productApp.get('/products',async(req,res)=>{
     //read products from db
     let productsList = await ProductModel.find();
     //send res
     res.status(200).send({message:"Products list",payload:productsList})
})

//modify the product
productApp.put("/products/:id",async (req,res) => {
    let objId=req.params.id;
    let modifyObject=req.body;
    let latestProduct=await ProductModel.findByIdAndUpdate(objId,{$set:{...modifyObject}},{new:true,runValidators:true})
    if(latestProduct === null){
        return res.status(200).json({message:"Product Not Found"});
    }
    res.status(200).json({message:"Product modified",payload:latestProduct});
})

//read products by id 
productApp.get('/products/:id',async(req,res)=>{
    //get product id from url param
    let productId = req.params.id;
    //read products from db 
    let product = await ProductModel.findOne({id:productId});       
    //send res
    res.status(200).json({message:"Product details",payload:product})
})

//update product by userid
productApp.put('/products/:id',async(req,res)=>{
    //get product id from url param
    let productId = req.params.id;  
    //get updated product data from req body
    let updatedProduct = req.body;  
    //update product in db
    let updatedProductDoc = await ProductModel.findOneAndUpdate({id:productId},{$set:{...updatedProduct}},{new:true});
    //send res
    res.status(200).json({message:"Product updated",payload:updatedProductDoc})
})
