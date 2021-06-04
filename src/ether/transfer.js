const Web3 = require("web3");
const EthereumTx = require('ethereumjs-tx').Transaction;
const axios = require('axios');
const ethNetwork = 'https://rinkeby.infura.io/v3/27e4398dbb084f45b55557b967d26345';
const web3 = new Web3(new Web3.providers.HttpProvider(ethNetwork));
async function user (result,error){
const sendersData ='0x2E99c6B03534C496a500B53C433CbAa9a70fCb9f'
const recieverData='0x4d8386D66465380a8684Dd522666E448ccE2cc52'
const amountToSend=0.1
if(error){
    console.log('invalid address')
}

}
async function transferFund(sendersData, recieverData, amountToSend) {
    
    return new Promise(async (resolve, reject) => {
        var nonce = await web3.eth.getTransactionCount(sendersData.address);
        web3.eth.getBalance(sendersData.address, async (err, result) => {
            if (err) {
                return reject();
            }
            let balance = web3.utils.fromWei(result, "ether");
            console.log(balance + " ETH");
            if(balance < amountToSend) {
                console.log('insufficient funds');
                return reject();
            }
   
            let gasPrices = await getCurrentGasPrices();
            let details = {
                "to": recieverData.address,
                "value": web3.utils.toHex(web3.utils.toWei(amountToSend.toString(), 'ether')),
                "gas": 21000,
                "gasPrice": gasPrices.low * 1000000000,
                "nonce": nonce,
                "chainId": 4 // EIP 155 chainId - mainnet: 1, rinkeby: 4
            };
            const transaction = new EthereumTx(details, {chain: 'rinkeby'});
            let privateKey1 = '0c5f2d7010723717e5c5f4c3210cede7574fff51fb7b3391f1ba60de8a06bb88';
            let privKey = Buffer.from(privateKey1,'hex');
            transaction.sign(privKey);
            
            const serializedTransaction = transaction.serialize();
           
            web3.eth.sendSignedTransaction('0x' + serializedTransaction.toString('hex'), (err, id) => {
                if(err) {
                    console.log(err);
                    return reject();
                }
                const url = `https://rinkeby.etherscan.io/tx/${id}`;
                console.log(url);
                resolve({id: id, link: url});
            });
        });
    });
}

async function getCurrentGasPrices() {
    let response = await axios.get('https://ethgasstation.info/json/ethgasAPI.json');
    let prices = {
      low: response.data.safeLow / 10,
      medium: response.data.average / 10,
      high: response.data.fast / 10
    };
    return prices;
}

async function getBalance(address) {
    return new Promise((resolve, reject) => {
        web3.eth.getBalance(address, async (err, result) => {
            if(err) {
                return reject(err);
            }
            resolve(web3.utils.fromWei(result, "ether"));
        });
    });
}

transferFund({address:'0x2E99c6B03534C496a500B53C433CbAa9a70fCb9f' , privateKey1:'0c5f2d7010723717e5c5f4c3210cede7574fff51fb7b3391f1ba60de8a06bb88' },{address:'0x4d8386D66465380a8684Dd522666E448ccE2cc52' },0.1)