const jwt= require('jsonwebtoken');
jwtsecret = "shoaibzakiisagood"

const auth = async(req,res,next) => {
  
const token=req.header('jtoken')
if(!token){
    return res.status(400).send({error:'token has found there'})
}
try {
    const data=token.verify(token,jwtsecret)
    req.user=data.user
    next() 
} catch (error) {
    return res.status(401).send({error:'please authenticate by using the valid token'})
}
}

export default auth
