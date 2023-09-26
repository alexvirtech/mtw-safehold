export class SHCoinClass {
    constructor(symbol,name,purpose,coin) {
        this.symbol = symbol
        this.name = name
        this.purpose = purpose
        this.coin = coin        
    }
    derivation(account=0,change=0) {
        let path = "m/"
        path += this.purpose + "'/"
        path += this.coin + "'/"
        path += account + "'/"
        path += change
        return path
    }
    derivationExt(account=0,change=0,index=0){
        let path = this.derivation(account,change)
        return path + "/" + index
    }
    mnemonic() {
        return window.generateMnemonic()
    }    
    create() {
        throw('the method \'create\' must be imlemented!')
    }
    sign() {
        throw('the method \'sign\' must be imlemented!')
    }
    async getTxId(uri,address) {
        try {
            const url = `${uri}${address}`
            const response = await fetch(url)
            const data = await response.json()
            const utxos = data.txrefs
            if (utxos && utxos.length > 0) {
                const txId = utxos[0].tx_hash  // Taking the first UTXO's txId for demo purposes.
                console.log(txId)
                return txId
            }else{
                console.log('No UTXOs for address: ' + address)
                return null
            }
        } catch (error) {
            console.error("Error fetching UTXOs:", error)
            return null
        }
    }
    /*async getUTXOs(uri, address) {
        try {
            //const url = `https://api.blockcypher.com/v1/btc/main/addrs/${address}`
            const url = `${uri}${address}`
            const response = await fetch(url)
            const data = await response.json()
            return data.txrefs // This is an array of transactions, each with its own txId.
        } catch (error) {
            console.error("Error fetching UTXOs:", error)
        }
    }*/
}