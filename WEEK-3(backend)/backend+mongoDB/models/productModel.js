import {Schema, model} from 'mongoose';
//create a schema {pid,productName,price}
const productSchema = new Schema({
    productName:{
        type: String,
        required: [true, "Name is required"],
        minLength: [4, "Name must be at least 4 characters long"],
        maxLength: [6, "Name can be at most 6 characters long"]
    },
    id:{
        type: String,
        required: [true, "Product ID is required"],
        unique: true
    },
    price: {
        type:Number,
        required: [true, "Price is required"],
        min: [0, "Price must be at least 0"]
    }
},{
    strict: "throw",
    timestamps: true
})

//create user model with that schema
export const ProductModel = model("Product", productSchema)