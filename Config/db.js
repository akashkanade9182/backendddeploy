const mongoose=require("mongoose")


const connection=mongoose.connect("mongodb+srv://akashkanade:akash1995@cluster0.vycxlvl.mongodb.net/mockfourteen?retryWrites=true&w=majority")

module.exports=connection;