# Ethereum Wallet Generator and Balance Checker
This code generates random Ethereum wallets and saves the address, mnemonic phrase, and private key to a file named "wallet.txt". It also prints the address and mnemonic phrase to the console. The user is prompted to enter the number of wallets they want to generate.

## Prerequisites
Node.js and npm (comes with Node.js)
ethers: 4.0.x
fs: 0.0.x
readline: 2.3.x
## Installation
Clone the repository
Run npm install to install the dependencies
## Usage
Run node index.js in your terminal
The script will prompt you to enter the number of wallets you want to generate
The script will generate the specified number of wallets and save them to a file named "wallet.txt" in the root of the project directory
## Note
The prompt function is a non-standardized method, it's not supported by all browsers. You can use other libraries like inquirer or use readline module in NodeJS.
Make sure to keep your private key safe and secure. Do not share it with anyone and do not use it on a compromised device.
## Disclaimer
This script is for educational and demonstration purposes only. Do not use it in production without thoroughly testing and reviewing the code. The author is not responsible for any damages or losses resulting from the use of this script.
