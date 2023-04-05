<<<<<<< HEAD
const mongoose=require("mongoose")


const connection=mongoose.connect("mongodb+srv://akashkanade:akash1995@cluster0.vycxlvl.mongodb.net/mock?retryWrites=true&w=majority")

=======
const mongoose=require("mongoose");
require('dotenv').config()
const connection=mongoose.connect(process.env.MONGO_URL)
>>>>>>> f5b8f6657ca8beeac9c3bd1b3bcb0a73b00e2190
module.exports=connection;