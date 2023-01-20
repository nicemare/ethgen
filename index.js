const ethers = require('ethers')
const fs = require('fs');
while(true){
    try {
const wallet = ethers.Wallet.createRandom()
fs.appendFileSync('wallet.txt', `${wallet.address}|${wallet.mnemonic.phrase}|${wallet.privateKey}\n`)
console.log(`address         : ${wallet.address} \nmnemonic phrase : ${wallet.mnemonic.phrase}`)
        }
    catch(e) { }
} 
