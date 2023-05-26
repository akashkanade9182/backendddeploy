const express=require("express");
const cors=require("cors");


const connection=require("./Config/db")
const blogRouter=require("./routes/blog.router");
const UserRouter=require("./routes/User.route")
const CourseRouter=require("./routes/Course.route");
const productRouter=require("./routes/Product.route");
const AccountRouter=require("./routes/Account.route")
const app=express();
app.use(express.json());
app.use(cors({
    origin:"*"
}))




app.use("/blogs",blogRouter);
app.use("/account",AccountRouter);
app.use("/user",UserRouter);
app.use("/course",CourseRouter);
app.use("/product",productRouter);



app.listen(7000,async()=>{
 try{
 await connection;
 console.log("server running on port 7000")
 }
 catch{
    console.log("error in server connection")
 }
})
