const USER1 = require('../model/loginmodel')
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');
jwtsecret = "shoaibzasdfsdf"
const { OAuth2Client } = require('google-auth-library')
const googleClient = new OAuth2Client({
  clientId: `653983784840-0cldsrk43ng1uca9rp8muvf90b4l4kqa.apps.googleusercontent.com`,
});

// our signup will be start from there

const signup=async( req,res)=>{
const {name,email,password}=req.body;
if(!name ||!email || !password){
 return res.status(422).json({error:'non empty fields it is '})

}
const userexits = await USER1.findOne({ email: email })
if(userexits){
  return res.status(422).json({error:'User is already exists there '})
}

try {
  const hashedPassword = await bcrypt.hash(password, 12);
  const user =new USER1({name,email,password:hashedPassword})
  const register = await user.save()
if(register){
  return res.status(200).json({message:'user resgistered successfully' })
}
// Here data is the payload is the info of the user whcih you stored in the webtoken
// const data ={

//   user:{
//     id:user.id
//   }
// }

   const authtoken=jwt.sign({ id: user.id },jwtsecret)
   console.log(authtoken)

} catch (error) {
      console.log(error)
      res.status(500).json({ error: "internal server error" })
}


}
// our sigin will be start from there

   const signin=async(req,res)=>{
    try {
      const {email,password}=req.body;
      if( !email || !password){
       return res.status(422).json({error:'sorry please filled the right fields'})
      }
      const userlogin =  await USER1.findOne({email:email})
      if(!userlogin){
        return res.status(422).json({error:'invalid credentials email not found'})
      }
      
      const passwordcompare = await bcrypt.compare(password, userlogin.password)
      
      const authtoken=jwt.sign({ id: userlogin.id },jwtsecret)
      console.log(authtoken)
      if(!passwordcompare){
        
        return res.status(400).json({ error: "password is not comparing" })
      }
      else {
        return   res.status(201).json({ message: "user signin successfully" })
          
     }
      

    } catch (error) {
      console.log(error)
      res.status(500).json({ error: "internal server error" })
    }
     
}

// our Google authentication will be start from there

 const authenticateUser = async (req,res) => {
  const { token } = req.body;

  const ticket = await googleClient.verifyIdToken({
    idToken: token,
    // audient: `${process.env.GOOGLE_CLIENT_ID}`
    audient:'653983784840-0cldsrk43ng1uca9rp8muvf90b4l4kqa.apps.googleusercontent.com '  ,
  });

  const payload = ticket.getPayload();

  let user = await USER1.findOne({ email: payload?.email });
  if (!user) {
    user = await new USER1({
      email: payload?.email,
      avatar: payload?.picture,
      name: payload?.name,
    });

    await user.save();
  }

  res.json({ user, token });
};


module.exports={signin,signup,authenticateUser}