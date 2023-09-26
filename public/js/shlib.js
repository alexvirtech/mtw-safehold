let mnemonics = { "english": new Mnemonic("english") }
let mnemonic = mnemonics["english"]
let PBKDF2_ROUNDS = "2048"
let seed = null
let bip32RootKey = null
let bip32ExtendedKey = null
const numWords = 12

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

function calcBip32RootKeyFromSeed(phrase, passphrase,network) { //
    seed = mnemonic.toSeed(phrase, passphrase)
    bip32RootKey = libs.bitcoin.HDNode.fromSeedHex(seed, network)
    //return {seed,bip32RootKey}
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
// Transaction
//////////////////////////////////
// for bitcoin based networks
// may be taken from the blockchain 
// example: https://api.blockcypher.com/v1/btc/main/addrs/[sender address]
/*function getTxId(utxos) {
    if (utxos && utxos.length > 0) {
        const txId = utxos[0].tx_hash  // Taking the first UTXO's txId for demo purposes.
        console.log(txId)
        return txId
    }
}*/

// for bitcoin based networks
// network: bitcoin, dash, dogecoin, litecoin
// senderPrivateKey: sender's private key in WIF format
// utxos: sender's UTXOs - may be taken from the blockchain 
// recipientAddress: recipient's address
// amount: amount to send in satoshi (1 BTC = 100,000,000 satoshi)
/*function createSignatureB(network, senderPrivateKey, utxos, recipientAddress, amount) {
    // This is just a demo. In real scenarios, determine UTXOs, amount, fees, etc.
    const tx = new libs.bitcoin.TransactionBuilder(libs.bitcoin.networks[network])
    const txId = getTxId(utxos) //'your UTXO transaction id' 
    tx.addInput(txId, 0) // 0 is the output index we want to use from the UTXO specified by txId
    tx.addOutput(recipientAddress, amount) // this should be the desired amount minus fees.

    const keyPair = libs.bitcoin.ECPair.fromWIF(senderPrivateKey)
    tx.sign(0, keyPair)

    const signedTx = tx.build().toHex()
    return signedTx
}*/





function winJsLoaded(){
    return generateMnemonic!==undefined
}