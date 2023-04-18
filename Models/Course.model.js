const mongoose=require("mongoose")


const courseSchema=mongoose.Schema({
    title : {type:String,require:true},
   duration: {type:String,require:true},
   content:{type:Array,require:true},

    
})

const Coursemodel=mongoose.model("talentboxcourse",courseSchema);

module.exports=Coursemodel;