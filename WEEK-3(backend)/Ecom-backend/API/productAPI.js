import exp from 'express'
export const prodRoute = exp.Router()
import {ProductModel} from '../Models/ProductModel.js'

//route to create new product
prodRoute.post("/products",async(req,res)=>{
    let productObj = req.body
    let productDocument = await new ProductModel(productObj)
    await productDocument.save()
    res.status(201).json({message:"created product"})
} )

prodRoute.get("/products",async(req,res)=>{
    let products = await ProductModel.find()
    res.status(200).json(products)
})