require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'inflict lobster flee spot bitter birth noise error grace hen fresh gasp'; 
let testAccounts = [
"0x4485945c73f5b3fedc646d15210ca963af680c53d764d20b418e5ac5df8d934e",
"0xef3deea50802f9f3aebcd6e321b34bf90d9f60143eab804fbe834a301ed9af14",
"0x4140c3f9c9bd765cf399a10bafdcbc3ddf371dd794f6ad644d2660be4845ff30",
"0xe4822b93d42816d0ebfbba0912d3d98753b102cfd4241cf32e7acf34271b084b",
"0x9ba9bbf8f95324ead2c6e9a97a93833fa470864838b9b4ab5655a83edf22024d",
"0x1636987ec94bc5ecfcf1b0ff740a8af8f157caf3702d0f438a2c6a238047edfd",
"0x25efeab06a40be50241f5a2eb24c9267403eda325efd0ae737153eda1c18bb3d",
"0x0a994329c9bbe53130e37a16b6aabc4a09a508a3459e4e553777374ac4e4ae9a",
"0x46de18cb3c585682397fc49a012cce909ea7716101217e36d5222cd8129e5a50",
"0xc58a985b7bf906bd60365405038d934126d2214f2416069018a61f3bd4e3b84a"
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

