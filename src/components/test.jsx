import { useState, useEffect } from 'preact/hooks'
import { createMnemonic } from '../index.js'

export default function Test() {
    const [sign, setSign] = useState('')
    const [account, setAccount] = useState('')
    const [mnemonic, setMnemonic] = useState('')

    const ph = 'material blame next enact page acoustic security ill certain cousin grunt series'
    const senderAddress = "14PEodQsCbxAcBHxiF2mWpWGaqM7qqUmJD" 
    const tempAddress = "bc1q8wq42jtz5mnj4yr98x72qvewfmflucf9aau0w2" // for test only
    const senderPrivateKey = "KzZ8D91yfc8vazFULStp96S9ZQSpxcMi1726oketqspGvPk9uTGq" 
    const recipientAddress = "bc1ql9hgyhxgy4jllw70ufr6mk92p54g28d6ssnp4e" 
    const trNetwork = 'bitcoin'
    const amount = 490000
       
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

    useEffect(() => {

        //const mn = createMnemonic()
        //setMnemonic(mn)

        if (window.generateMnemonic) {
           /* const d = window.getDerivationPath()
            const m = ph //window.generateMnemonic()
            const a = window.createAccount(m, d, 0)
            //setMnemonic(window.generateMnemonic())
            setAccount(a)*/
            ///////////////////////////
            getUTXOs(tempAddress).then((utxos) => {//senderAddress
                if(utxos){
                    const stx = window.createSignatureB(trNetwork,senderPrivateKey,utxos,recipientAddress,amount)
                    setSign(stx)
                }else{
                    setSign('No UTXOs found')
                }                
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