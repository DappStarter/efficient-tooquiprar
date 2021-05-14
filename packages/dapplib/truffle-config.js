require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'grace creek olympic short north rescue spawn purse hunt knee front stadium'; 
let testAccounts = [
"0x36e86e42ed16efc4d4801e685e7a8f109e73e850b89f1f357670dcc5e3823a08",
"0xe71154732300b4dcb02e467d46f55cb9b2632ee489688ccd70d09ecf5c9e6313",
"0x2b5bfe3ab660749e74548c57ae4da3fc0d9b04484856304df2af8eec49fd9efb",
"0x4731eec8afb0c3e2d34ad39a3d291e0558f2c5f6cff7bd621745f62f8669687a",
"0x9a217abba55c49f4ba3136e189a7a4c332c9f30296f90bd3f753b0167a12b462",
"0x65a8e53f30d581d3b435139daca7d581aa7b8e1d51c0e6f2a4844209d7e3f5c6",
"0x02feaf49714df3f36af0426225abd8f1971e4aa8376cda2cd3733a52b89a3fc3",
"0x6bf9a002c58b6f75beca57a8f4379707075a725f5e890fcc1989e03b68490fd7",
"0x8946eb54e3685ee8c931754aba498c1576f15177c45dbde19b3a35bcd0d43f2c",
"0xccf8f04fe38ad0097290474a255260c222174fad688a75d455d17919d275f5de"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

