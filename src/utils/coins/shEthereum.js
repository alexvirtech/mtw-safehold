import { SHCoinClass } from './shCoinClass.js'
import { ethers } from 'ethers'

export class SHEthereum extends SHCoinClass {
    constructor() {
        super("ETH", "Ethereum", 44, 60)
    }
    create(phrase, account, change, index) {
        const derivation = this.derivationExt(account, change, index)
        const wallet = ethers.Wallet.fromMnemonic(phrase, derivation)
        const privkey = wallet.privateKey 
        const pubkey = wallet.publicKey
        const address = wallet.address        
        return { address, pubkey, privkey }
    }
}