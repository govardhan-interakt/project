const jwt = require('jsonwebtoken')
const User = require ('../models/address')
const auth = async (req,res, next)=>{
   try{
       const token = req.header('Authorization').replace('Bearer','')
       const decoded = await jwt.verify(token,'thisisme')
       const user =await User.finfOne({ _id:decoded._id,'tokens.token':token})
       if(!user){
        throw new Error()
       }
       req.user =user
       next()
   }catch (e){
       res.status(401).send({error:'please authenticate.'})
   }
}
module.exports = auth