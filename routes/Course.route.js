const express = require("express")

const Coursemodel = require("../Models/Course.model.js")


const CourseRouter = express.Router()


CourseRouter.get("/", async (req, res) => {
   
     try {
            let data=await Coursemodel.find();
               res.status(200).send(data)
         
         

     }
     catch {
          console.log(err);
          res.status(400).send("error in getting course data")

     }
})








module.exports = CourseRouter;