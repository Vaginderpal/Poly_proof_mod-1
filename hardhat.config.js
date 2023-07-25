require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

task("accounts", "Prints the list of all accounts", async (taskArgs,hre) => {
  const accounts = await hre.ethers.getSigners();

  for(const account of accounts){
    console.log(account);
  }
})


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
    },
    mumbai: {
      url: process.env.MUMBAI_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
    goerli: {
      url: "https://rpc.ankr.com/eth_goerli",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
