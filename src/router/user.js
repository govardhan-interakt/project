const express = require ('express')
const router =new express.Router()
const User =require('../models/address')
const balance = require('../models/balances')
const auth = require('../middleware/auth')


var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://localhost:4545/',
  'headers': {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "jsonrpc": "2.0",
    "method": "eth_getBalance",
    "params": ['0x2E99c6B03534C496a500B53C433CbAa9a70fCb9f',
                'latest'                    
],
    "id": 1
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
 // console.log(response.body);
});
module.exports = router