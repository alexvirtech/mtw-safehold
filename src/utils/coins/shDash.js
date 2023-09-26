import { SHCoinClass } from './shCoinClass.js'

export class SHDash extends SHCoinClass {
    constructor() {
        super("DASH", "Dash", 44, 5)
    }
    calcBip32RootKeyFromSeed(phrase, passphrase = '') {
        window.calcBip32RootKeyFromSeed(phrase, passphrase, window.libs.bitcoin.networks.dash)
    }
    create(phrase, account, change, index) {
        this.calcBip32RootKeyFromSeed(phrase)
        const path = this.derivation(account, change)
        let bip32ExtendedKey = window.calcBip32ExtendedKey(path)
        let key = bip32ExtendedKey.derive(index)
        let keyPair = key.keyPair
        let address = keyPair.getAddress().toString()
        let hasPrivkey = !key.isNeutered()
        let privkey = "NA"
        if (hasPrivkey) {
            privkey = keyPair.toWIF()
        }

        let pubkey = keyPair.getPublicKeyBuffer().toString('hex')

        return { address, pubkey, privkey }
    }    
    sign(txId, senderPrivateKey, recipientAddress, amount) {
        const tx = new libs.bitcoin.TransactionBuilder(libs.bitcoin.networks.dash)
        tx.addInput(txId, 0)
        tx.addOutput(recipientAddress, amount)
        const keyPair = libs.bitcoin.ECPair.fromWIF(senderPrivateKey, libs.bitcoin.networks.dash)
        tx.sign(0, keyPair)
        const signedTx = tx.build().toHex()
        return signedTx
    }
}