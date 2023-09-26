import { SHCoinClass } from './shCoinClass.js'

export class SHBitcoin extends SHCoinClass {
    constructor() {
        super("BTC", "Bitcoin", 84, 0)
    }
    calcBip32RootKeyFromSeed(phrase, passphrase = '') {
        window.calcBip32RootKeyFromSeed(phrase, passphrase, window.libs.bitcoin.networks.bitcoin)
    }
    create(phrase, account, change, index) {
        this.calcBip32RootKeyFromSeed(phrase)
        const path = this.derivation(account, change)
        let bip32ExtendedKey = window.calcBip32ExtendedKey(path)
        let key = bip32ExtendedKey.derive(index)
        let keyPair = key.keyPair
        // get address for bitcoin with segwit
        let keyhash = window.libs.bitcoin.crypto.hash160(key.getPublicKeyBuffer())
        let scriptpubkey = window.libs.bitcoin.script.witnessPubKeyHash.output.encode(keyhash)
        let address = window.libs.bitcoin.address.fromOutputScript(scriptpubkey, window.libs.bitcoin.networks.bitcoin)
        // get privkey
        let hasPrivkey = !key.isNeutered()
        let privkey = "NA"
        if (hasPrivkey) {
            privkey = keyPair.toWIF()
        }
        let pubkey = keyPair.getPublicKeyBuffer().toString('hex')
        return { address, pubkey, privkey }
    }  
    sign(txId, senderPrivateKey, recipientAddress, amount) {
        const tx = new window.libs.bitcoin.TransactionBuilder(libs.bitcoin.networks.bitcoin)       
        tx.addInput(txId, 0) // 0 is the output index we want to use from the UTXO specified by txId
        tx.addOutput(recipientAddress, amount) // this should be the desired amount minus fees.
        const keyPair = window.libs.bitcoin.ECPair.fromWIF(senderPrivateKey)
        tx.sign(0, keyPair)    
        const signedTx = tx.build().toHex()
        return signedTx
    }
}