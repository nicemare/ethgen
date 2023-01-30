const ethers = require('ethers')
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Mau generate berapa wallet ? ', (loopCount) => {
    for (let i = 0; i < parseInt(loopCount); i++) {
        try {
            const wallet = ethers.Wallet.createRandom()
            fs.appendFileSync('wallet.txt', `${wallet.address}|${wallet.mnemonic.phrase}|${wallet.privateKey}\n`)
            fs.appendFileSync('addresses.txt', `${wallet.address}\n`)
            console.log(`address         : ${wallet.address} \nmnemonic phrase : ${wallet.mnemonic.phrase}`)
        } catch (e) { }
    }
    rl.close();
});


