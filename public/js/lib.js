// test version 0.0.1 
//////////////////////////////////
// Account
//////////////////////////////////
let mnemonics = { "english": new Mnemonic("english") }
let mnemonic = mnemonics["english"]
let PBKDF2_ROUNDS = "2048"
let seed = null
let bip32RootKey = null
let bip32ExtendedKey = null
let network = libs.bitcoin.networks.bitcoin
let coin = 0 // default coin - BTC
//network = libs.bitcoin.networks.litecoin
//setHdCoin(2)




//let purpose = 84 // 

/*let purpose = 44

let account = 0
let change = 0*/
let numWords = 12

// mnemonic phrase
function generateMnemonic() { //
    // get the amount of entropy to use
    let strength = numWords / 3 * 32
    let buffer = new Uint8Array(strength / 8)
    // create secure entropy
    let data = crypto.getRandomValues(buffer)
    // show the words
    let words = mnemonic.toMnemonic(data)
    return words
}

// account by mnemonic and derivation path
function createAccountSH(phrase, path, index) { //    
    if (!phrase) phrase = generateMnemonic()
    //purpose = 84
    calcBip32RootKeyFromSeed(phrase, '')
    const values = calcValues(path, index)
    return { ...values, mnemonic: phrase }
}

// account by mnemonic and derivation path
function createAccount(phrase, coin, account, change, index) { //    
    if (!phrase) phrase = generateMnemonic()
    calcBip32RootKeyFromSeed(phrase, '')
    derivation = getDerivation(coin, account, change)
    const values = calcValues(derivation, index)
    return { ...values, mnemonic: phrase }
}

function getDerivation(coin = 0, account = 0, change = 0) { //
    let path = "m/"
    path += purpose + "'/"
    path += coin + "'/"
    path += account + "'/"
    path += change
    return path
}

function calcValues(derivation, index) {   
    bip32ExtendedKey = calcBip32ExtendedKey(derivation)
    let key = bip32ExtendedKey.derive(index)
    let keyPair = key.keyPair
    // get address
    let address = keyPair.getAddress().toString()
    if (derivation.startsWith('m/84')) { // TBD
        var keyhash = libs.bitcoin.crypto.hash160(key.getPublicKeyBuffer())
        var scriptpubkey = libs.bitcoin.script.witnessPubKeyHash.output.encode(keyhash)

        address = libs.bitcoin.address.fromOutputScript(scriptpubkey, network)
    }
    // get privkey
    let hasPrivkey = !key.isNeutered()
    let privkey = "NA"
    if (hasPrivkey) {
        privkey = keyPair.toWIF()
    }

    let pubkey = keyPair.getPublicKeyBuffer().toString('hex')
    if (coin == 60) {
        let pubkeyBuffer = keyPair.getPublicKeyBuffer()
        let ethPubkey = libs.ethUtil.importPublic(pubkeyBuffer)
        let addressBuffer = libs.ethUtil.publicToAddress(ethPubkey)
        let hexAddress = addressBuffer.toString('hex')
        let checksumAddress = libs.ethUtil.toChecksumAddress(hexAddress)
        address = libs.ethUtil.addHexPrefix(checksumAddress)
        pubkey = libs.ethUtil.addHexPrefix(pubkey)
        if (hasPrivkey) {
            privkey = libs.ethUtil.bufferToHex(keyPair.d.toBuffer(32))
        }
    }
    return { derivation, index, address, pubkey, privkey }
}

function calcBip32RootKeyFromSeed(phrase, passphrase) { //
    seed = mnemonic.toSeed(phrase, passphrase)
    bip32RootKey = libs.bitcoin.HDNode.fromSeedHex(seed, network)
}

function calcBip32ExtendedKey(path) {  //  
    // Check there's a root key to derive from
    if (!bip32RootKey) {
        return bip32RootKey
    }
    let extendedKey = bip32RootKey
    // Derive the key from the path
    let pathBits = path.split("/")
    for (let i = 0; i < pathBits.length; i++) {
        let bit = pathBits[i]
        let index = parseInt(bit)
        if (isNaN(index)) {
            continue
        }
        let hardened = bit[bit.length - 1] == "'"
        let isPriv = !(extendedKey.isNeutered())
        let invalidDerivationPath = hardened && !isPriv
        if (invalidDerivationPath) {
            extendedKey = null
        }
        else if (hardened) {
            extendedKey = extendedKey.deriveHardened(index)
        }
        else {
            extendedKey = extendedKey.derive(index)
        }
    }
    return extendedKey
}

//////////////////////////////////
// TB removed
const networks = [
    {
        symbol: "BTC",
        name: "Bitcoin",
        onSelect: function () {
            network = libs.bitcoin.networks.bitcoin
            coin = 0,
                purpose = 84
        },
    },
    {
        symbol: "DASH",
        name: "Dash",
        onSelect: function () {
            network = libs.bitcoin.networks.dash
            coin = 5,
                purpose = 44
        },
    },
    {
        symbol: "DOGE",
        name: "Dogecoin",
        onSelect: function () {
            network = libs.bitcoin.networks.dogecoin
            coin = 3,
                purpose = 44
        },
    },
    {
        symbol: "ETH",
        name: "Ethereum",
        onSelect: function () {
            network = libs.bitcoin.networks.bitcoin
            coin = 60,
                purpose = 44
        },
    },
    {
        symbol: "LTC",
        name: "Litecoin",
        onSelect: function () {
            network = libs.bitcoin.networks.litecoin
            coin = 2,
                purpose = 84
        },
    }
]

//////////////////////////////////
// Transaction
//////////////////////////////////
// for bitcoin based networks
// may be taken from the blockchain 
// example: https://api.blockcypher.com/v1/btc/main/addrs/[sender address]
function getTxId(utxos) {
    if (utxos && utxos.length > 0) {
        const txId = utxos[0].tx_hash  // Taking the first UTXO's txId for demo purposes.
        console.log(txId)
        return txId
    }
}

// for bitcoin based networks
// network: bitcoin, dash, dogecoin, litecoin
// senderPrivateKey: sender's private key in WIF format
// utxos: sender's UTXOs - may be taken from the blockchain 
// recipientAddress: recipient's address
// amount: amount to send in satoshi (1 BTC = 100,000,000 satoshi)
function createSignatureB(network, senderPrivateKey, utxos, recipientAddress, amount) {
    // This is just a demo. In real scenarios, determine UTXOs, amount, fees, etc.
    const tx = new libs.bitcoin.TransactionBuilder(libs.bitcoin.networks[network])
    const txId = getTxId(utxos) //'your UTXO transaction id' 
    tx.addInput(txId, 0) // 0 is the output index we want to use from the UTXO specified by txId
    tx.addOutput(recipientAddress, amount) // this should be the desired amount minus fees.

    const keyPair = libs.bitcoin.ECPair.fromWIF(senderPrivateKey)
    tx.sign(0, keyPair)

    const signedTx = tx.build().toHex()
    return signedTx
}

// for ethereum - TBD
