const Web3 = require("web3")

const web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/27e4398dbb084f45b55557b967d26345"))

web3.eth.getBalance("0x2E99c6B03534C496a500B53C433CbAa9a70fCb9f", function(err, result) {
  if (err) {
    console.log(err)
  } else {
    console.log(web3.utils.fromWei(result, "ether") + " ETH")
  }
})
