import {Schema, model} from 'mongoose';
//create user Schema (username,password,age)
const userSchema = new Schema({
    name:{
        type: String,
        required: [true, "Name is required"],
        minLength: [4, "Name must be at least 4 characters long"],
        maxLength: [6, "Name can be at most 6 characters long"]
    },
    password:{
        type: String,
        required: [true, "Password is required"],
    },
    age: {
        type:Number,
        required: [true, "Age is required"],
        min: [18, "Age must be at least 18"],
        max: [25, "Age can be at most 25"]
    }
},{
    strict: "throw",
    timestamps: true
})

//create user model with that schema
export const UserModel = model("User", userSchema)