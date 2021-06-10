const express = require ('express')
require('./db/mongoose')
const Balance =require('./ether/balance')
const Transaction= require('./ether/transfer')
const usdt =require('./ether/usdtbalance')
const User =require('./models/address')
const userRouter =require('./router/user')
const auth =require ('./middleware/auth')
const app = express()
const wallet = require('./ether/ether-wallet')
const port = process.env.PORT || 4545
app.use(express.json())
app.use(userRouter)







app.listen(port,()=>{
    console.log('server is on port' +port)
})
const jwt = require('jsonwebtoken')
const myfunctioin=async ()=>{
const token = jwt.sign({_id:'abcd123'},'thisisme')

const data =jwt.verify(token,'thisisme')
}
return myfunctioin()