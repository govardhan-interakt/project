const express = require ('express')
require('./db/mongoose')
const Balance =require('./ether/balance')
const Transaction= require('./ether/transfer')
const usdt =require('./ether/usdtbalance')
const gettransactions =require('./ether/gettransaction')
const User =require('./models/users')
const userRouter =require('./router/user')
const auth =require ('./middleware/auth')
const app = express()
const port = process.env.PORT || 5454
app.use(express.json())
app.use(userRouter)







app.listen(port,()=>{
    console.log('server is on port' +port)
})
const jwt = require('jsonwebtoken')
const gettransaction = require('./ether/gettransaction')
const myfunctioin=async ()=>{
const token = jwt.sign({_id:'abcd123'},'thisisme')
console.log(token)
const data =jwt.verify(token,'thisisme')
console.log(data)
}
return myfunctioin()