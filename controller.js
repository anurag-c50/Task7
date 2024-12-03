const users=require('./user')
const fs =require("fs")
const {generateToken,verifyToken}=require('./auth')
module.exports.login=async(req,res,next)=>{
    try{
    const{useremail,password}=req.body;
    const user = users.find((u)=>u.useremail===useremail)
    if(!user){
        return res.Status(401).send({msg:"Invalid Useremail and Password",status:false})
    }
    if(password!==user.password){
        return res.Status(401).send({msg:"Invalid Useremail and Password",status:false})
    }
    const token=generateToken(user)
    fs.truncate('./Token.txt', 0, function(err){
        if (err) throw err;
        console.log('done')
    })

    fs.writeFile('./Token.txt',token, function (err) {
        if (err) throw err;
        console.log('Token Saved');
      });
    return res.status(200).json({user,token,status:true})
    }catch(err){
        next(err)
    }
}
module.exports.auth=async(req,res,next)=> {
    try{
    res.status(200).json({ status:true,message: 'This is a protected route', user: req.user });
    }catch(err){
        next(err)
    }
  };