/** @type import('hardhat/config').HardhatUserConfig */

const { networks } = require('../my-hardhat-project/hardhat.config');

require("@nomiclabs/hardhat-ethers");
module.exports = {
  solidity: "0.8.28",
  networks:
  {
    localhost: {
      url: "http://127.0.0.1:8545",
    }
  }
};
