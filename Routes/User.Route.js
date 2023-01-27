const express=require("express")
// const bcrypt = require('bcrypt');
// var jwt = require('jsonwebtoken');


const Usermodel = require("../Models/user.model")

const userRouter = express.Router();
// const Authenticate=require("../Middleware/Authentication")



userRouter.post("/register", async (req, res) => {
    const { name,level} = req.body;
   try{
        let data={name,level,score:0};
        let user=new Usermodel(data);
        await user.save();
        let lastuser=await Usermodel.find().sort({_id: -1}).limit(1)
        res.send(lastuser[0])

    }
    catch (err) {
        console.log(err)
        res.send("error in signup")
    }

})

userRouter.patch("/update/:id",async(req,res)=>{
    let data=req.body;
    let id=req.params.id
    await Usermodel.findByIdAndUpdate({_id:id},data)


})
module.exports=userRouter









module.exports = userRouter;