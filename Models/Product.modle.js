const mongoose=require("mongoose")


const productSchema=mongoose.Schema({
   
    title: {type:String,require:true},
    image: {type:String,require:true},
    images: {type:String,require:true},
    category:{type:String,require:true},
 
    brand: {type:String,require:true},
    price:{type:Number,require:true},
    quantity: {type:Number,require:true},
    favorite: {type:Boolean,require:true},
    rating:{type:Number,require:true},
   
   
 
})

const Productmodel=mongoose.model("products",productSchema);

module.exports=Productmodel;