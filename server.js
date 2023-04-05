const express=require("express")
const cors=require("cors")



const connection=require("./Config/db");
const userRouter = require("./Routes/User.Route");
const CourseRoute=require("./Routes/Course.route")

const app=express();
app.use(express.json())
app.use(cors({
    origin:"*"
}))

app.use("/",userRouter)
app.use("/getcourse",CourseRoute)




app.listen(7000,async()=>{
    await connection
    console.log("server is running on port 7000")
})