
var jwt = require('jsonwebtoken');




const Autheticate=(req,res,next)=>{
const token=req?.headers?.authorization?.split(" ")[1];
if(token){
    var decoded = jwt.verify(token, 'shhhhh');
    if(decoded){
        const userId=decoded.userId;
        req.body.userId=userId;
        next();
    }else{
        res.send("error in decoding of token")
    }
}else{
    res.send("error in gettting  tokens")

}

}
module.exports=Autheticate;