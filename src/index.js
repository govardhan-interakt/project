const express = require ('express')
require('./db/mongoose')
const Balance =require('./ether/balance')
//const Transaction= require('./ether/transfer')
const usdt =require('./ether/usdtbalance')
const User =require('./models/address')
const auth =require ('./middleware/auth')
var mainController = require('./controller/wallet')
const app = express()
const wallet = require('./ether/ether-wallet')
const port = process.env.PORT || 4040
app.use(express.json())



app.get('/addr/:coin', mainController.createWallet);
app.get('/balance/:coin/:address', mainController.getWalletBalances)

app.post('/transfer/:coin', mainController.sendTransaction);



app.listen(port,()=>{
    console.log(`Listening: http://localhost:${port}`)
})
