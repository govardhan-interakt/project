const Web3 =require('web3')
const ethNetwork = 'https://mainnet.infura.io/v3/27e4398dbb084f45b55557b967d26345';
const web3 = new Web3(new Web3.providers.HttpProvider(ethNetwork));
const utils =  require('ethereumjs-util')
const Tx = require('ethereumjs-tx')
const ABI = require('../utils/abi')
const contractAddress ='0xdAC17F958D2ee523a2206206994597C13D831ec7'
const contract =new web3.eth.Contract(ABI,contractAddress)
contract.methods.symbol().call((error,result)=>{
    console.log(result)
})