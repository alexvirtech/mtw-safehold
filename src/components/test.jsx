import { useState, useEffect } from 'preact/hooks'
import { createMnemonic } from '../index.js'

export default function Test() {
    const [sign, setSign] = useState('')
    const [account, setAccount] = useState('')
    const [mnemonic, setMnemonic] = useState('')

    const ph = 'material blame next enact page acoustic security ill certain cousin grunt series'
    
    const getUTXOs = async (address) => {
        try {
            const url = `https://api.blockcypher.com/v1/btc/main/addrs/${address}`
            const response = await fetch(url)
            const data = await response.json()
            return data.txrefs // This is an array of transactions, each with its own txId.
        } catch (error) {
            console.error("Error fetching UTXOs:", error)
        }
    }    

    const getTxId = async () => {
        const a = "bc1q8wq42jtz5mnj4yr98x72qvewfmflucf9aau0w2"
        const utxos = await getUTXOs(a)
        if (utxos && utxos.length > 0) {
            const txId = utxos[0].tx_hash  // Taking the first UTXO's txId for demo purposes.
            console.log(txId)
            return txId                
        }
    }

    const createSignature = async () => {
        const senderAddress = "14PEodQsCbxAcBHxiF2mWpWGaqM7qqUmJD" //document.getElementById("address-sender").value
        const senderPrivateKey = "KzZ8D91yfc8vazFULStp96S9ZQSpxcMi1726oketqspGvPk9uTGq" //document.getElementById("privatekey").value
        const recipientAddress = "bc1ql9hgyhxgy4jllw70ufr6mk92p54g28d6ssnp4e" //document.getElementById("address-recipient").value

        // This is just a demo. In real scenarios, determine UTXOs, amount, fees, etc.
        const tx = new libs.bitcoin.TransactionBuilder(libs.bitcoin.networks.bitcoin)
        const txId = await getTxId() //'your UTXO transaction id' // This should come from the list of UTXOs associated with senderAddress
        tx.addInput(txId, 0) // 0 is the output index we want to use from the UTXO specified by txId
        tx.addOutput(recipientAddress, 490000) // 490000 satoshis = 0.0049 BTC. This should be the desired amount minus fees.

        const keyPair = libs.bitcoin.ECPair.fromWIF(senderPrivateKey)
        tx.sign(0, keyPair)

        const signedTx = tx.build().toHex()
        return signedTx
        //document.getElementById("signature").innerText = signedTx
    }

    useEffect(() => {

        const mn = createMnemonic()
        setMnemonic(mn)

        if (window.generateMnemonic) {
            const d = window.getDerivationPath()
            const m = ph //window.generateMnemonic()
            const a = window.createAccount(m, d, 0)
            //setMnemonic(window.generateMnemonic())
            setAccount(a)
            ///////////////////////////
            createSignature().then((stx) => {
                setSign(stx)
            })
        }
    }, [])

    return (
        <div class="mt-4 w-[800px] mx-auto">
            <div>{mnemonic}</div>
            <div class="mt-4">
                <pre>{JSON.stringify(account,null,2)}</pre>
            </div>
            <div class="mt-4 break-all">{sign}</div>
        </div>
    )
}