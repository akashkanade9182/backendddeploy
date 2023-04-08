
const mongoose=require("mongoose")


const connection=mongoose.connect("mongodb+srv://akashkanade:akash1995@cluster0.vycxlvl.mongodb.net/mock?retryWrites=true&w=majority")


const mongoose=require("mongoose");
require('dotenv').config()
const connection=mongoose.connect(process.env.MONGO_URL)

module.exports=connection;
