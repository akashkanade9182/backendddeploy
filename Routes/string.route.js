const express=require("express")
var randomstring = require("randomstring");



const stringRouter = express.Router();
stringRouter.get("/",async(req,res)=>{
    let randomNumber = Math.floor(Math.random() * 10) + 1;
let string= randomstring.generate({
    length:randomNumber,
    capitalization:"lowercase"
});
res.send(string)
})


module.exports=stringRouter;