import {Schema,model} from 'mongoose'
//product schema
const productSchema = new Schema({
    productName:{
    type:String,
    required:[true,"Product name required"]},
    price:{
        type:Number,
        required:[true,"product price required"]},
    brand:{
        type:String,
        required:[true,"product brand is required"]
    }

})

export let ProductModel = model("product",productSchema)