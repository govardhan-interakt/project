const etherWallet = require('ethereumjs-wallet')
const ether =require('../ether/balance')
const transfer = require('../ether/transfer')



function generateEtherAddress(req, res){
    const myWallet = etherWallet.default.generate()
    const ethAddress = myWallet.getAddressString().toLowerCase()
    const privateKey = myWallet.getPrivateKeyString()
    const publicKey = myWallet.getPublicKeyString();
    var pk = privateKey.startsWith("0x") ? privateKey.substr(2) : privateKey;
    if(ethAddress && pk){
        return res.status(200).json({status: true, data:{address: ethAddress, private: pk, public: publicKey}, message: 'wallet created successfully'})
    }else{
        return res.status(200).json({status: false, data:null, message: 'unable to create wallet,'})
    }
}

//handle wallet creation route
exports.createWallet = function(req, res){
    let wallet_type  = req.params.coin;
    
    switch (wallet_type) {
      
        case 'ETH': generateEtherAddress(req, res);
            break;
      
        case 'USDT': generateEtherAddress(req, res);
            break;
        default:
            res.status(200).json({status: false, data: null, message: 'invalid coin type selected!'})
            break;
    }
}

//handle transfer router
exports.sendTransaction = function(req, res){
    let wallet_type = req.params.coin;
    switch (wallet_type) {
   
        case 'ETH': ether.transferEther(req, res);
            break;
        case 'USDT': ether.transferToken(req, res)
            break;
       
        default:            
            res.status(200).json({status: false, data: null, message: 'invalid coin type selected!'})
            break;
    }
}


//get wallet balance
exports.getWalletBalances = function(req, res){
    let wallet_type = req.params.coin;

    switch (wallet_type) {
       
        case 'ETH': ether.getBalance(req, res)
            break;
        case 'USDT': ether.getUSDTBalance(req, res);
            break;
       
        default: 
            res.status(200).json({status: false, data: null, message: 'invalid coin type selected!'})
            break;
    }
}