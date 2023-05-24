const express=require("express");




const Productmodel=require("../Models/Product.modle")





const productRouter=express.Router();

productRouter.get("/getall",async(req,res)=>{
     try{
          let data=await Productmodel.find();
        return  res.status(200).send({data:data,total:data.length})
     }
     catch{
         return res.status(400).send("error in getting products")

          console.log("error in getting products")
     }
})

productRouter.get("/getproducts",async(req,res)=>{
     const page = req.query.page || 1;
     const perPage=req.query.limit || 1;
     const skipdata=(page - 1) * perPage;
     try{
          let productdata=await Productmodel.find();
          if(skipdata>productdata.length){
             return res.status(400).send("page limit exced")
          }
          else{
               let data=await Productmodel.find().skip(skipdata).limit(perPage)
               res.status(200).send({data:data,total:productdata.length})
          }

     }
     catch{
          res.status(400).send(" error in getting producst p")
     }
})


module.exports=productRouter;