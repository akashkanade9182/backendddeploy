const mongoose=require("mongoose")


const todoSchema=mongoose.Schema({
    taskname: {type:String,require:true},
    status : {type:String,require:true},
    tag : {type:String,require:true}
})

const Todomodel=mongoose.model("todos",todoSchema);

module.exports=Todomodel;