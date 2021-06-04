const Web3 = require("web3")

const web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/27e4398dbb084f45b55557b967d26345"))
const account ='0x2E99c6B03534C496a500B53C433CbAa9a70fCb9f'.toLowerCase();
async function checkLastBlock(){
    let block = await web3.eth.getBlock('latest');
    console.log('[*]searching block ${block.number}...');
    if (block && block.transactions){
        for (let txhash of block.transactions){
            let tx = await web3.eth.getTransaction(txhash);
            if (account === tx.to.toLowerCase()){
                console.log('[+]  Transaction found on block ${lastBlockNumber}');
                console.log({
                    address:tx.from,
                    value:web3.utils.fromWei(tx.value,'ether'),
                    timestamp:new Date()
                })
            }
        }
    }
}
