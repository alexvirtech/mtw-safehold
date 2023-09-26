// Import the Buffer polyfill first
/*import { Buffer } from 'buffer'
// Make it globally available if needed
if (typeof window !== 'undefined') {
    window.Buffer = Buffer
}
import bitcoin from 'bitcoinjs-lib'*/

export const coinList = {
    "ADA": {
        id: "cardano",
        derivation: "m/1852'/1815'/0'/", //Cardano       
        dp: "m/1852'/1815'/",
        name: "Cardano",
        website: "https://www.cardano.org/",
        image: "/images/cgicons/cardano.webp",
        summary: "Cardano is a decentralized public blockchain and cryptocurrency project and is fully open source. Cardano is developing a smart contract platform which seeks to deliver more advanced features than any protocol previously developed. It is the first blockchain platform to evolve out of a scientific philosophy and a research-first driven approach. The development team consists of a large global collective of expert engineers and researchers.",
        coingecko: "https://www.coingecko.com/en/coins/cardano"
    },
    "AVAX": {
        id: "avalanche-2",
        derivation: "m/44'/9000'/0'/",
        dp: "m/44'/9000'/",
        name: "Avalanche",
        website: "https://www.avalabs.org/",
        image: "/images/cgicons/Avalanche_Circle_RedWhite_Trans.webp",
        summary: "Avalanche is a decentralized platform that enables the creation of custom blockchains. It is a platform that allows developers to create their own blockchains, which can be used to create decentralized applications. The platform is designed to be highly scalable and secure, and is based on the Proof-of-Stake consensus algorithm.",
        coingecko: "https://www.coingecko.com/en/coins/avalanche-2"
    },
    "BTC": {
        id: "bitcoin",
        //network: bitcoin.networks.bitcoin,
        derivation: "m/44'/0'/0'/",
        dp: "m/44'/0'/",
        net: 20,
        network: window.libs.bitcoin.networks.bitcoin,
        coin: 0,
        purpose: 84,
        name: "Bitcoin",
        website: "https://bitcoin.org/en/",
        prefix: "1", // legacy
        image: "/images/cgicons/bitcoin.webp",
        summary: "Bitcoin is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries. Transactions are verified by network nodes through cryptography and recorded in a public distributed ledger called a blockchain. Bitcoin was invented by an unknown person or group of people under the name Satoshi Nakamoto and released as open-source software in 2009.",
        coingecko: "https://www.coingecko.com/en/coins/bitcoin"
    },
    "BCH": {
        id: "bitcoin-cash",
        derivation: "m/44'/145'/0'/",
        dp: "m/44'/145'/",
        name: "Bitcoin Cash",
        website: "https://www.bitcoincash.org/",
        prefix: "1",
        image: "/images/cgicons/bch.webp",
        summary: "Bitcoin Cash is a cryptocurrency that is a fork of Bitcoin. It was created in August 2017 as a result of a hard fork of the Bitcoin blockchain with the stated aim of improving the scalability of transactions on the network. Bitcoin Cash has a larger block size limit and therefore can process more transactions.",
        coingecko: "https://www.coingecko.com/en/coins/bitcoin-cash"
    },
    "BNB": {
        id: "binancecoin",
        derivation: "m/44'/714'/0'/",
        dp: "m/44'/714'/",
        name: "BNB",
        website: "https://www.binance.com/en",
        prefix: "bnb",
        image: "/images/cgicons/bnb.webp",
        summary: "Binance Coin is the cryptocurrency used to pay fees on the Binance cryptocurrency exchange. It is an ERC-20 token that is issued by the Binance blockchain platform. Binance Coin is the native token of the Binance Chain, a blockchain that is designed to support the Binance DEX.",
        coingecko: "https://www.coingecko.com/en/coins/binancecoin"
    },
    "DASH": {
        id: "dash",
        //network: bitcoin.networks.dash,
        derivation: "m/44'/5'/0'/",
        dp: "m/44'/5'/",
        net: 45,
        net: 20,
        network: window.libs.bitcoin.networks.dash,
        coin: 5,
        purpose: 44,
        name: "Dash",
        website: "https://www.dash.org/",
        prefix: "D",
        image: "/images/cgicons/dash.webp",
        summary: "Dash is a cryptocurrency that aims to offer financial privacy to its users. It is a fork of Bitcoin and uses the same blockchain technology. Dash uses a decentralized governance and budgeting system to make decisions for the future development of the cryptocurrency.",
        coingecko: "https://www.coingecko.com/en/coins/dash"
    },
    "DOGE": {
        id: "dogecoin",
        //network: bitcoin.networks.dogecoin,        
        derivation: "m/44'/3'/0'/",
        dp: "m/44'/3'/",
        net: 54,
        network: window.libs.bitcoin.networks.dogecoin,
        coin: 3,
        purpose: 44,
        name: "Dogecoin",
        website: "https://dogecoin.com/",
        prefix: "D", // may be "9"
        image: "/images/cgicons/doge.webp",
        summary: "Dogecoin is a cryptocurrency featuring a likeness of the Shiba Inu dog from the 'Doge' Internet meme as its logo. Introduced as a 'joke currency' on 6 December 2013, Dogecoin quickly developed its own online community and reached a capitalization of US$60 million in January 2014.",
        coingecko: "https://www.coingecko.com/en/coins/dogecoin"
    },
    "DOT": {
        id: "polkadot",
        derivation: "m/44'/354'/0'/",
        dp: "m/44'/354'/",
        name: "Polkadot",
        website: "https://polkadot.network/",
        prefix: "1", // may be "2"
        image: "/images/cgicons/dot.webp",
        summary: "Polkadot is a decentralized network that allows different blockchains to communicate with each other. It is a protocol that allows the creation of parachains, which are blockchains that can be connected to the Polkadot network. The Polkadot network is designed to be highly scalable and secure, and is based on the Proof-of-Stake consensus algorithm.",
        coingecko: "https://www.coingecko.com/en/coins/polkadot"
    },
    "EOS": {
        id: "eos",
        derivation: "m/44'/194'/0'/",
        dp: "m/44'/194'/",
        name: "EOS",
        website: "https://eos.io/",
        prefix: "EOS",
        image: "/images/cgicons/eos.webp",
        summary: "EOS is a decentralized operating system that is designed to support the development of decentralized applications. It is a blockchain-based platform that allows developers to create decentralized applications that can be used to create smart contracts. The EOS network is designed to be highly scalable and secure, and is based on the Proof-of-Stake consensus algorithm.",
        coingecko: "https://www.coingecko.com/en/coins/eos"
    },
    "ETH": {
        id: "ethereum",
        derivation: "m/44'/60'/0'/",
        dp: "m/44'/60'/",
        net: 68,
        network: window.libs.bitcoin.networks.bitecoin, //TBD
        coin: 60,
        purpose: 44,
        name: "Ethereum",
        website: "https://ethereum.org/en/",
        prefix: "0x",
        image: "/images/cgicons/eth.webp",
        summary: "Ethereum is a decentralized, open-source blockchain with smart contract functionality. Ether is the native cryptocurrency of the platform. It is the second-largest cryptocurrency by market capitalization, after Bitcoin.",
        coingecko: "https://www.coingecko.com/en/coins/ethereum"
    },
    "LTC": {
        id: "litecoin",
        //network: bitcoin.networks.litecoin,
        derivation: "m/44'/2'/0'/",
        dp: "m/44'/2'/",
        net: 103,
        network: window.libs.bitcoin.networks.litecoin,
        coin: 2,
        purpose: 84,
        name: "Litecoin",
        website: "https://litecoin.org/",
        prefix: "L",
        image: "/images/cgicons/ltc.webp",
        summary: "Litecoin is a peer-to-peer cryptocurrency and open-source software project released under the MIT/X11 license. Litecoin was an early bitcoin spinoff or altcoin, starting in October 2011. In technical details, Litecoin is nearly identical to Bitcoin.",
        coingecko: "https://www.coingecko.com/en/coins/litecoin"
    },
    "MATIC": {
        id: "matic-network",
        derivation: "m/44'/60'/0'/",       //Polygon    
        dp: "m/44'/60'/",
        name: "Polygon",
        website: "https://polygon.technology/",
        prefix: "0x",
        image: "/images/cgicons/matic.webp",
        summary: "Polygon is a protocol and a framework for building and connecting Ethereum-compatible blockchain networks. It is a scaling solution for Ethereum that uses a sidechain architecture. Polygon is based on the Proof-of-Stake consensus algorithm.",
        coingecko: "https://www.coingecko.com/en/coins/matic-network"
    },
    "SOL": {
        id: "solana",
        derivation: "m/44'/501'/0'/",     //Solana   
        dp: "m/44'/501'/",
        name: "Solana",
        website: "https://solana.com/",
        prefix: "S",
        image: "/images/cgicons/sol.webp",
        summary: "Solana is a decentralized blockchain network that is designed to be highly scalable and secure. It is a Proof-of-Stake blockchain that uses a novel consensus algorithm called Proof-of-History. Solana is designed to be a platform for decentralized applications and smart contracts.",
        coingecko: "https://www.coingecko.com/en/coins/solana"
    }
}


export const coinListTest = {
    "wETH": {
        id: "ethereum",
        name: "MTW Ethereum",
        proto: "ETH",
        website: "https://prev.morethanwallet.com/testnet/about",
        image: "/icons/mtw_eth.svg",
    },
    "wBTC": {
        id: "bitcoin",
        name: "MTW Bitcoin",
        proto: "BTC",
        website: "https://prev.morethanwallet.com/testnet/about",
        image: "/icons/mtw_btc.svg",
        address: "0xA014A5E978B9A542b2065Ba4a29D68De9b3431D1",
        abi: [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }],
        abi1: "/contracts/contracts_tokens_sol_wBTC.abi"
    },
    "wADA": {
        id: "cardano",
        name: "MTW Cardano",
        proto: "ADA",
        website: "https://prev.morethanwallet.com/testnet/about",
        image: "/icons/mtw_ada.svg",
        address: "0x6F7389872A6C15C4B7234Fa23C4D6df8fA378587",
        abi: [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }],
        abi1: "/contracts/contracts_tokens_sol_wADA.abi"
    },
    "wBNB": {
        id: "binancecoin",
        name: "MTW Binancecoin",
        proto: "BNB",
        website: "https://prev.morethanwallet.com/testnet/about",
        image: "/icons/mtw_bnb.svg",
        address: "0x0cc5bb418771573C04187828C2ef491A6f51b909",
        abi: [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }],
        abi1: "/contracts/contracts_tokens_sol_wBNB.abi"
    },
    "wDOGE": {
        id: "dogecoin",
        name: "MTW Dogecoin",
        proto: "DOGE",
        website: "https://prev.morethanwallet.com/testnet/about",
        image: "/icons/mtw_doge.svg",
        address: "0xBB69C32dc4827ec722f46891fA1F661400143DAe",
        abi: [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }],
        abi1: "/contracts/contracts_tokens_sol_wDOGE.abi"
    },
    "wUSD": {
        id: "tether",
        name: "MTW USD",
        proto: "USD",
        website: "https://prev.morethanwallet.com/testnet/about",
        image: "/icons/mtw_usdt.svg",
        address: "0x6319276ac7962A04696064261e082f8c48dF9376",
        abi: [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }],
        abi1: "/contracts/contracts_tokens_sol_wUSD.abi"
    }
}