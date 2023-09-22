// mnemonics is populated as required by getLanguage
let mnemonics = { "english": new Mnemonic("english") }
let mnemonic = mnemonics["english"]
let PBKDF2_ROUNDS = "2048"
let seed = null
let bip32RootKey = null
let bip32ExtendedKey = null
let network = libs.bitcoin.networks.bitcoin

let purpose = 44
let coin = 0
let account = 0
let change = 0
let numWords = 12

function createAccount(phrase,derivation,index) { //    
    let entropy = mnemonic.toRawEntropyHex(phrase)
    calcBip32RootKeyFromSeed(phrase, '')
    const values = calcValues(index, derivation)
    return  values
}

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

function getDerivationPath(purpose=44,coin=0,account=0,change=0) { //
    let path = "m/"
    path += purpose + "'/"
    path += coin + "'/"
    path += account + "'/"
    path += change
    return path
}

function setDerivationParams (coin, account, change) {
    coin = coin
    account = account
    change = change
}

function calcValues(index, derivation) {
    bip32ExtendedKey = calcBip32ExtendedKey(derivation)
    let key = bip32ExtendedKey.derive(index)
    let keyPair = key.keyPair
    // get address
    let address = keyPair.getAddress().toString()
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

const networks = [
    {
        symbol: "BTC",
        name: "Bitcoin",
        onSelect: function () {
            network = libs.bitcoin.networks.bitcoin
            coin = 0
        },
    },
    {
        symbol: "DASH",
        name: "Dash",
        onSelect: function () {
            network = libs.bitcoin.networks.dash
            coin = 5
        },
    },
    {
        symbol: "DOGE",
        name: "Dogecoin",
        onSelect: function () {
            network = libs.bitcoin.networks.dogecoin
            coin = 3
        },
    },
    {
        symbol: "ETH",
        name: "Ethereum",
        onSelect: function () {
            network = libs.bitcoin.networks.bitcoin
            coin = 60
        },
    },
    {
        symbol: "LTC",
        name: "Litecoin",
        onSelect: function () {
            network = libs.bitcoin.networks.litecoin
            coin = 2
        },
    }
]