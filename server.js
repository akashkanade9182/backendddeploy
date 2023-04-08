const express=require("express");
const cors=require("cors");


const connection=require("./Config/db")
const blogRouter=require("./Routes/Blogs.Route");
const bloguserRouter=require("./Routes/User.Route")

const app=express();
app.use(express.json());
app.use(cors({
    origin:"*"
}))

app.use("/",userRouter)



app.use("/blogs",blogRouter);
app.use("/bloguser",bloguserRouter);

app.listen(7000,async()=>{
 try{
 await connection;
 console.log("server running on port 7000")
 }
 catch{
    console.log("error in server connection")
 }
})
