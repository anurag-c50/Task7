const jwt = require("jsonwebtoken")
const jwtkey="mynameisanuragjhaandiamsoftwareen"
 const verifyToken=(req,res,next)=>{
   const token = req?.header('Authorization')||req?.body?.token
   console.log(token)
    if (!token) {
        return res.json({ message: "No token provided",status:false });
    }
    const verifyToken = jwt.verify(token,jwtkey,(err,res)=>{
        if(err){
            console.log(err,8)
            return "token expired"
        }return res;
    })
    if(verifyToken==="token expired"){
        return res.json({msg:"token expired",status:false})
    }else{
       return next()
    }   
}
const generateToken=(user)=>{
    const payload={id:user.id.toString(),useremail:user.useremail}
    return jwt.sign({payload},jwtkey,{expiresIn:"3m"})
}
module.exports={generateToken,verifyToken}