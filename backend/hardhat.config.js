require('@nomicfoundation/hardhat-toolbox');
require('hardhat-contract-sizer');
require('dotenv').config();

task('accounts', 'Prints the list of accounts', async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const ALCHEMY_API_KEY = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;
const SEPOLIA_PRIVATE_KEY = process.env.NEXT_PUBLIC_SEPOLIA_PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/13f835147ade481082d958fe4dd77360`,
      accounts: ['ea7943de3d8ab53e51e1dc141e4dadbe1cfd59c5565d2809481578d221546cea'],
      chainId: 11155111
    },
  },
  solidity: '0.8.17',
};
