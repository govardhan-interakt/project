const Web3 =require('web3')
const ethNetwork = 'https://mainnet.infura.io/v3/27e4398dbb084f45b55557b967d26345';
const web3 = new Web3(new Web3.providers.HttpProvider(ethNetwork));
const utils =  require('ethereumjs-util')
const Tx = require('ethereumjs-tx');
const { count } = require('../models/address');
const ABI =require('../utils/abi')
const contractAddress ='0xdAC17F958D2ee523a2206206994597C13D831ec7'
const address = '0xa929022c9107643515f5c777ce9a910f0d1e490c'
const contract =new web3.eth.Contract(ABI,contractAddress)

contract.methods.balanceOf(address).call((error,result)=>{
    console.log(result,'USDT')
})
web3.eth.getBlock('latest').then((block)=>{
    console.log({blockHash :block.hash,
                blockNumber :block.number
    })
})
web3.eth.getBlockTransactionCount('latest').then(console.log)

web3.eth.getGasPrice().then((result)=>{
    console.log(web3.utils.fromWei(result,'ether'))
})