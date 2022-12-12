const express=require("express");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');


const Usermodel=require("../models/User.model");
const { send } = require("process");


const UserRouter=express.Router();


UserRouter.post("/signup",async(req,res)=>{
    const{email,password,name,age}=req.body;
    try{
        let presentuser=await Usermodel.findOne({email});
        if(presentuser){
            res.send("username already exist")
        }else{

            bcrypt.hash(password, 4, async function(err, hash) {
                const user=new Usermodel({email,password:hash,name,age})
                await user.save();
                res.send("Singup Succefully")
             
            });

        }
      

    }
    catch(err){
            console.log(err)
            res.send("error in signup")
    }

   
})

UserRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    const puser=await Usermodel.find({email});
    const hash_password=puser[0].password;
    const userId=puser[0]._id;
    try{
        bcrypt.compare(password, hash_password, function(err, result) {
            if(result){
                const token= jwt.sign({ "userId":userId }, 'shhhhh');
                if(token){
                    res.send({"mess":"longin succefull",token:token})
                }else{
                    res.send("error in getting token")
                }

            }else{
                res.send("password or username is wrong")
            }
        });


    }
    catch(err){
console.log(err);
res.send("error in login")

    }
    
})

module.exports=UserRouter;