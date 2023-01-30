const fs = require('fs');
const ethers = require('ethers');

async function checkBalance(address) {
  const provider = new ethers.providers.InfuraProvider('homestead');
  const balance = await provider.getBalance(address);
  const etherBalance = ethers.utils.formatEther(balance);
  console.log(`Balance of ${address}: ${etherBalance} ETH`);
}

fs.readFile('addresses.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const addresses = data.split('\n').filter(address => address.length > 0);
  addresses.forEach(address => checkBalance(address));
});
