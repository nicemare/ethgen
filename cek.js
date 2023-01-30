const fs = require('fs');
const ethers = require('ethers');

async function checkBalance(address) {
  const startTime = Date.now();
  const provider = new ethers.providers.InfuraProvider('homestead');
  const balance = await provider.getBalance(address);
  const etherBalance = ethers.utils.formatEther(balance);
  console.log(`Balance of ${address}: ${etherBalance} ETH`);
  return Date.now() - startTime;
}

fs.readFile('addresses.txt', 'utf8', async (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const addresses = data.split('\n').filter(address => address.length > 0);
  const times = await Promise.all(addresses.map(address => checkBalance(address)));
  const totalTime = times.reduce((sum, time) => sum + time, 0);
  console.log(`Total addresses loaded: ${addresses.length}`);
  console.log(`Total time taken: ${totalTime}ms`);
});
