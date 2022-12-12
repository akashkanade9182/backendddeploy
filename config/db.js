const { url } = require("inspector");
const mongoose=require("mongoose");
require('dotenv').config()

const connection=mongoose.connect(porcess.env.mongo_url)


module.exports=connection;