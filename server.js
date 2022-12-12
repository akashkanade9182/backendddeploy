const express=require("express");


const connection=require("./config/db")
const UserRouter=require("./routes/User.Route")
const TodoRouter=require("./routes/Todo.Route")
const Autheticate=require("./middleware/Authetication")


const app=express();
app.use(express.json());

app.use("/",UserRouter);
app.use(Autheticate);
app.use("/todos",TodoRouter);




app.listen(7000,async()=>{

    try{
        await connection
        console.log("server is connected")
        console.log("server is running on port 7000");
    }
    catch(err){
        console.log(" error in server connect")
    }
 
})