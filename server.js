const express=require("express");
const cors=require("cors")


const connection=require("./Config/db")
const userRouter=require("./Routes/user.route.js");
const stringRouter=require("./Routes/string.route")


const app=express();
app.use(express.json());
app.use(cors({
    origin:"*"
}))


app.use("/",userRouter)
app.use("/string",stringRouter)


app.listen(7000,async()=>{
   try{ await connection;
    console.log("server is running on port 7000")}
    catch(e){
        console.log("error in mongodb connection")
    }
})