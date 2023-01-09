
const crypto = require("crypto");
const Token=require('../../model/passwords-schemas/token')
const USER=require('../../model/loginmodel');
const sendemail = require("../../util/nodemailer");
var bcrypt = require('bcryptjs');
const url ='http://localhost:5000'
const saltRounds = 10;



require('dotenv').config();
// forget password functionality or send the link to the email account
const forgetpass=async(req,res)=>{

    try {
        
        const user = await USER.findOne({ email: req.body.email });
        if (!user)
           
        return res.status(400).send("user with given email doesn't exist");
        
        let token = await Token.findOne({ userId:user._id});
        if (!token) {
            token = await new Token({
                userId:user._id,
                token: crypto.randomBytes(32).toString("hex"),
            }).save();
        }

        const link = `${url}/password-reset/${user._id}/${token.token}`;
        await sendemail(user.email, "Password reset", link);

        res.send("password reset link sent to your email account");
    } catch (error) {
        res.send("An error occured");
        console.log(error);
    }
    

   
}
// verify the password link

const verifypass=async(req,res)=>{
       try {
           const _id=req.params.id
           const user= await USER.findOne({ _id })
                if(!user) return res.status(400).json({error:'invalid link'})
                const token =await  Token.findOne({
                    userId: user._id,
                    token:req.params.token
                })
                if(!token) if(!user) return res.status(400).json({error:'invalid token'})
       } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
       }

}
// resestpass functionality
const resetpass=async(req,res)=>{
    try {
          const  user= await USER.findById({_id: req.params.id })
          if(!user){
              return res.status(400).json('invalid link of the user')
          }

          const token = await Token.findOne({
            userId: user._id,
            token: req.params.token,
          })

          if(!token){
              return res.status(400).json('invalid link of the user from the token')

          }

          const salt = bcrypt.genSaltSync(saltRounds);
          const hashPassword = bcrypt.hashSync( process.env.PASS_HASH, salt);
              user.password=hashPassword
              await user.password
              await token.remove();
              
        res.send("password reset sucessfully.");

    } catch (error) {
        
        res.status(500).send({ message: "Internal Server Error" });

    }

}



  
  

module.exports={ forgetpass,resetpass,verifypass}