import { SHCoinClass } from './shCoinClass.js'

export class SHLitecoin extends SHCoinClass {
    constructor() {
        super("LTC", "Litecoin", 84, 2)
    }
    calcBip32RootKeyFromSeed(phrase, passphrase = '') {
        window.calcBip32RootKeyFromSeed(phrase, passphrase, window.libs.bitcoin.networks.litecoin)
    }
    create(phrase, account, change, index) {
        this.calcBip32RootKeyFromSeed(phrase)
        const path = this.derivation(account, change)
        let bip32ExtendedKey = window.calcBip32ExtendedKey(path)
        let key = bip32ExtendedKey.derive(index)
        let keyPair = key.keyPair
        let keyhash = window.libs.bitcoin.crypto.hash160(key.getPublicKeyBuffer())
        let scriptpubkey = window.libs.bitcoin.script.witnessPubKeyHash.output.encode(keyhash)
        let address = window.libs.bitcoin.address.fromOutputScript(scriptpubkey, window.libs.bitcoin.networks.litecoin.p2wpkh)
        let hasPrivkey = !key.isNeutered()
        let privkey = "NA"
        if (hasPrivkey) {
            privkey = keyPair.toWIF()
        }
        let pubkey = keyPair.getPublicKeyBuffer().toString('hex')

        return {address,pubkey,privkey}        
    }
    sign(txId, senderPrivateKey, recipientAddress, amount) {
        const tx = new libs.bitcoin.TransactionBuilder(libs.bitcoin.networks.litecoin)
        tx.addInput(txId, 0)
        tx.addOutput(recipientAddress, amount)
        const keyPair = libs.bitcoin.ECPair.fromWIF(senderPrivateKey, libs.bitcoin.networks.litecoin)
        tx.sign(0, keyPair)
        const signedTx = tx.build().toHex()
        return signedTx
    }    
}