require("@nomicfoundation/hardhat-toolbox");
// require("dotenv").config()

/** @type import('hardhat/config').HardhatUserConfig */


// const GOERLI_URL = process.env.GOERLI_URL;
// const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  // defaultNetwork: "sepolia",
  solidity: "0.8.24",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    hardhat: {
      chainId: 1337,
    },
    // sepolia: {
    //   url: GOERLI_URL,
    //   accounts: [PRIVATE_KEY],
    // }
  }
};
