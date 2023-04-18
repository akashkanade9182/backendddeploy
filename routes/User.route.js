const express = require("express")
var jwt = require('jsonwebtoken');

const Usermodel = require("../Models/User.model.js")
const Authenticate = require("../middle/Authentication.js")


const UserRouter = express.Router()

UserRouter.get("/:token",(req,res)=>{
     
})

UserRouter.use(Authenticate)

UserRouter.post("/", async (req, res) => {
     const { name, email, password } = req.body;
     const presentuser = await Usermodel.find({ email });
     const userId = presentuser[0]._id;
     try {

          const token = jwt.sign({ "userId": userId }, 'shh');
          if (token) {
             res.cookie('jwt', token, {
                    httpOnly: true,
                secure:false,
                    
                    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
               })
               res.status(200).send({mess:"signin successfully",token:token})
          }
          else {
               return res.status(400).send("error in getting token")
          }

     }
     catch {
          console.log(err);
          res.status(400).send("error in login")

     }
})








module.exports = UserRouter;