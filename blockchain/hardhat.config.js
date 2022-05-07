
require("@nomiclabs/hardhat-waffle");
require("dotenv").config({path: "./.env"});

const ALCHEMY_HTTP_URL = process.env.ALCHEMY_HTTP_URL;
const RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: ALCHEMY_HTTP_URL,
      accounts: [RINKEBY_PRIVATE_KEY]
    }
  }
}