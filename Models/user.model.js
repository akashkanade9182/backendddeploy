const mongoose=require("mongoose")


const userSchema=mongoose.Schema({
   name:{type:String,require:true},
   level: {type:String,require:true},
   score: {type:Number,require:true},

 
    
})

const Usermodel=mongoose.model("users",userSchema);

module.exports=Usermodel;