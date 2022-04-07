// https://eth-ropsten.alchemyapi.io/v2/3qR0csKsjYdt87tLXd-jbP0danezRv0P

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten:{
      url:'https://eth-ropsten.alchemyapi.io/v2/3qR0csKsjYdt87tLXd-jbP0danezRv0P',
      accounts:['4abe9e11dbd81172e0a2273275a26614c867f824721f7006f0aea210a25a2735']
    }
  }
}
