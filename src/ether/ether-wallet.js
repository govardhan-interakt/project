//create ether-wallet
var Wallet = require('ethereumjs-wallet');
const EthWallet = Wallet.default.generate();
console.log("address: " + EthWallet.getAddressString());
console.log("privateKey: " + EthWallet.getPrivateKeyString());

//validate address
const ethereum_address = require('ethereum-address')
const address ='0xeff51c911258aed571f6b7053a4ff81cb75bb3f1'

if(ethereum_address.isAddress(address)){
    console.log('valid ethereum address')
    

}else{
    console.log('invalid address')
}
