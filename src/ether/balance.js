const Web3 = require("web3")

const web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/27e4398dbb084f45b55557b967d26345"))
const utils =  require('ethereumjs-util')
const Tx = require('ethereumjs-tx')

//const {ABI} = require('../utils/abi')
//ar config = require('../config/index')
const contractAddress ='0xdAC17F958D2ee523a2206206994597C13D831ec7'
const abi =[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_upgradedAddress","type":"address"}],"name":"deprecate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"deprecated","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_evilUser","type":"address"}],"name":"addBlackList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"upgradedAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maximumFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_maker","type":"address"}],"name":"getBlackListStatus","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowed","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"who","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newBasisPoints","type":"uint256"},{"name":"newMaxFee","type":"uint256"}],"name":"setParams","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"issue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"redeem","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"basisPointsRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"isBlackListed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_clearedUser","type":"address"}],"name":"removeBlackList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"MAX_UINT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_blackListedUser","type":"address"}],"name":"destroyBlackFunds","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_initialSupply","type":"uint256"},{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimals","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"Issue","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"Redeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newAddress","type":"address"}],"name":"Deprecate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"feeBasisPoints","type":"uint256"},{"indexed":false,"name":"maxFee","type":"uint256"}],"name":"Params","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_blackListedUser","type":"address"},{"indexed":false,"name":"_balance","type":"uint256"}],"name":"DestroyedBlackFunds","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_user","type":"address"}],"name":"AddedBlackList","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_user","type":"address"}],"name":"RemovedBlackList","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"}]



//get ETH balance
exports.getBalance = function(req, res){
  var address = req.params.address;
  if(!web3.utils.isAddress(address)){
      return res.status(200).json({status: false, data:0, message: 'invalid address, please provide valid ether address'})

  }
  web3.eth.getBalance(address)
  .then((bal)=>{
      var balanceInEth = web3.utils.fromWei(bal, 'ether')
      
              res.status(200).json({status: true, data:{ETH: parseFloat(balanceInEth).toFixed(8)}, message: 'success'})
      })
          .catch(er=>{
              res.status(200).json({status: true, data:{ETH: parseFloat(balanceInEth).toFixed(8)}, message: 'success'})
          })
      
      .catch(er=>{
          console.log(er)
          res.status(200).json({status: true, data:{ETH: parseFloat(balanceInEth).toFixed(8)}, message: 'success'})
      })
  
  .catch(reason=>{
      return res.status(200).json({status: false, data:{address: address, balance:0}, message: 'something went wrong, please try again'})
  })

}
//get usdt balance
exports.getUSDTBalance = function(req, res){
  var address = req.params.address
  if(web3.utils.isAddress(address)){
    const contract =new web3.eth.Contract(abi,contractAddress)
      contract.methods.balanceOf(address).call()
      .then(result=>{
          res.status(200).json({status: true, data:{USDT: (result/1e6).toFixed(8)}, message: 'success'})
      })
      .catch(er=>{
          res.status(200).json({status: true, data:{USDT: 0}, message: 'success'})
      })
  }else{
      res.status(200).json({status: false, data:{USDT: 0}, message: 'invalid address'})
  }
}

//transfer ether from account
exports.transferEther = function(req, res){
    if(typeof req.body.from == 'undefined')
        return res.status(200).json({status: false, data:null, message:'Invalid sender wallet address, please provide sender wallet address'})
    if(typeof req.body.to == 'undefined')
        return res.status(200).json({status: false, data:null, message:'Invalid receiver wallet address, please provide receiver wallet address'})
    if(typeof req.body.amount == 'undefined')
        return res.status(200).json({status: false, data:null, message:'Invalid amount, please provide valid amount'})
    if(typeof req.body.private == 'undefined')
        return res.status(200).json({status: false, data:null, message:'Invalid key, please provide valid key'})
    if(req.body.amount < 0.001)
        return res.status(200).json({status: false, data:null, message:'Transfer amount should > 0.001'})
    else{
        var private = req.body.private.startsWith('0x') ? req.body.private.substr(2): req.body.private
        var privateKey = new Buffer.from(private, 'hex');
        if(!utils.isValidPrivate(privateKey)){
            return res.status(200).json({status: false, data:null, message:'Invalid private key, please provide valid private key associated with wallet'})
        }
        if(!(req.body.from.toLowerCase() == ('0x' + utils.privateToAddress(privateKey).toString('hex')).toLowerCase())){
            return res.status(200).json({status: false, data:null, message:'Provided private key is not associated with sender wallet'})
        }
        
        //validate receiver address
        if(web3.utils.isAddress(req.body.to)){
            web3.eth.getBalance(req.body.from)
            .then(async (bal)=>{
                var balanceInEth = parseFloat(web3.utils.fromWei(bal, 'ether'))
                var gasPrice = await web3.eth.getGasPrice();
                var gasLimit = 23000;
                var tx_fees= parseFloat(web3.utils.fromWei((gasLimit * gasPrice * 1.3).toString(),'ether'))
                if(balanceInEth >= req.body.amount + tx_fees){
                    var from = req.body.from
                    var to = req.body.to
                    var amount = (req.body.amount).toString()
                    var txCount = await web3.eth.getTransactionCount(from,'pending');
                    var rawTransaction = {
                        nonce: web3.utils.toHex(txCount),
                        gasPrice: web3.utils.toHex(parseInt(gasPrice * 1.1)),
                        gasLimit: web3.utils.toHex(gasLimit),
                        to:to,
                        value: web3.utils.toHex(web3.utils.toWei(amount)),
                        chainId: 4
                    }
                    var privateKey = new Buffer.from(private, 'hex');
                    var tx = new Tx(rawTransaction);
                    tx.sign(privateKey);
                    var serializedTx = tx.serialize();
                    web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'))
                    .then(receipt=>{
                        return res.status(200).json({status: true, data:receipt.transactionHash, message:'transaction sent successfully'})  
                    })
                    .catch(e=>{
                        return res.status(200).json({status: false, data:e, message:'error while sending transaction'})  
                    })
                }else{
                    return res.status(200).json({status: false, data:balanceInEth, message:'insufficient ether balance in your wallet!'})
                }
            })
            .catch(r=>{
                return res.status(200).json({status: false, data:r, message:'error while initiating transaction'})  
            })
        }else{
            return res.status(200).json({status: false, data:null, message:'invalid receiver address, please provide valid address '})
        }
    }
}
