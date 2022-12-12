const mongoose=require("mongoose")


const userSchema=mongoose.Schema({
    email:{type:String,require:true},
    password:{type:String,require:true},
    name:String,
    age:Number
})

const Usermodel=mongoose.model("users",userSchema);

module.exports=Usermodel;