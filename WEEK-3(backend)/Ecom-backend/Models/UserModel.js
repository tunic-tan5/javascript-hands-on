import {Schema, model} from 'mongoose';

//create cart schema
const cartSchema = new Schema({
    product:{
        type:Schema.Types.ObjectId,
        ref:"product"
    },
    quantity:{
        type:Number,
        default:1
    }

})
//user schema
const userSchema = new Schema({ 
    name:{
        type:String,
        required:[true,"User name required"]},
    email:{
        type:String,
        required:[true,"User email required"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"User password required"]
    },
    cart:{
        type:[cartSchema]
    }
})

export let UserModel = model("user",userSchema);
    