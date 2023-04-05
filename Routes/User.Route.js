const express=require("express")
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
<<<<<<< HEAD
const userRouter=express.Router()
const Usermodel=require("../Models/user.model")


userRouter.post("/signup",async(req,res)=>{
    const{email,password}=req.body;
=======
const bloguserRouter=express.Router()
const Usermodel=require("../Models/User.Model")


bloguserRouter.post("/signup",async(req,res)=>{
    const{name,avatar,email,password}=req.body;
    let followers=[];
>>>>>>> f5b8f6657ca8beeac9c3bd1b3bcb0a73b00e2190
    try{
        let presentuser=await Usermodel.findOne({email});
        if(presentuser){
            res.send("username already exist")
        }else{

            bcrypt.hash(password, 4, async function(err, hash) {
<<<<<<< HEAD
                const user=new Usermodel({email,password:hash})
                await user.save();
                res.send("Singup Succefully")
=======
                const user=new Usermodel({email,password:hash,name,avatar,followers})
                await user.save();
                res.status(200).send("Singup Succefully")
>>>>>>> f5b8f6657ca8beeac9c3bd1b3bcb0a73b00e2190
             
            });

        }
      

    }
    catch(err){
            console.log(err)
<<<<<<< HEAD
            res.send("error in signup")
    }

})
userRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    const presentuser=await Usermodel.find({email});
    if(presentuser.length===0){
        res.send("wrong email")
    }
    const hash_password=presentuser[0].password;
    const userId=presentuser[0]._id;
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
=======
            res.status(400).send("error in signup")
    }

})
bloguserRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    const presentuser=await Usermodel.find({email});
    if(presentuser.length===0){
        res.status(400).send("wrong email")
    }
    const hash_password=presentuser[0].password;
    const userId=presentuser[0]._id;
    const {name,avatar}=presentuser[0]
    try{
        bcrypt.compare(password, hash_password, function(err, result) {
            if(result){
                const token= jwt.sign({ "userId":userId,"name":name,"avatar":avatar }, 'shh');
                if(token){
                    res.status(200).send({"mess":"longin succefull",token:token,user:{email:presentuser[0].email,name,avatar,id:presentuser[0]._id}})
                }else{
                    res.status(400).send("error in getting token")
                }

            }else{
                res.status(400).send("password or username is wrong")
>>>>>>> f5b8f6657ca8beeac9c3bd1b3bcb0a73b00e2190
            }
        });


    }
    catch(err){
console.log(err);
<<<<<<< HEAD
res.send("error in login")
=======
res.status(400).send("error in login")
>>>>>>> f5b8f6657ca8beeac9c3bd1b3bcb0a73b00e2190

    }
})

<<<<<<< HEAD
module.exports=userRouter
=======
module.exports=bloguserRouter;
>>>>>>> f5b8f6657ca8beeac9c3bd1b3bcb0a73b00e2190
