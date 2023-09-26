import { SHBitcoin } from "../utils/coins/shBitcoin"
import { SHLitecoin } from "../utils/coins/shLitecoin"
import { SHDogecoin } from "../utils/coins/shDogecoin"
import {SHEthereum} from "../utils/coins/shEthereum"
import { SHDash } from "../utils/coins/shDash"
import { useState, useEffect } from 'preact/hooks'

export default function Test2() {
    const phrase = 'material blame next enact page acoustic security ill certain cousin grunt series'

    useEffect(() => {
        if (window.winJsLoaded) {            

            // btc
            /*const shb = new SHBitcoin()     
            const uri = 'https://api.blockcypher.com/v1/btc/main/addrs/'
            const address = 'bc1q8wq42jtz5mnj4yr98x72qvewfmflucf9aau0w2'
            const senderPrivateKey = 'KzZ8D91yfc8vazFULStp96S9ZQSpxcMi1726oketqspGvPk9uTGq'
            const recipientAddress = 'bc1ql9hgyhxgy4jllw70ufr6mk92p54g28d6ssnp4e'*/

            /*const shb = new SHDash()     
            const uri = 'https://api.blockcypher.com/v1/dash/main/addrs/'
            const address = 'XsVsWBgdXTrdGXsaHRxa2GJiLm4uRW2eQk'
            const senderPrivateKey = 'XGGj16M6MtDwAMuuuLp4hiwoeK9EMJjofLtjJmVyUxPohvMnvoLg'
            const recipientAddress = 'XiDkuZoCEM6nWbi9ezovAHrcEJbJ329BcF'*/

           /* const shb = new SHDogecoin()     
            const uri = 'https://api.blockcypher.com/v1/doge/main/addrs/'
            const address = 'D7VYpMtcBK93R9CuDHvfCrZfALj11upXHi'
            const senderPrivateKey = 'QPEQavKuppbSMMW7Gax4h2cpgroC2WZYYC8t9dZU1zKiHKhBZzt8'
            const recipientAddress = 'D7EBmSKpdonBtyTiqsZEva44GuPkZcEDqq'*/

            const shb = new SHLitecoin()     
            const uri = 'https://api.blockcypher.com/v1/ltc/main/addrs/'
            const address = 'ltc1qsyscv08526z0nzzr9kuksygxmhm29dwxfftun4'
            const senderPrivateKey = 'T4ZQiBi4MKGTx1rjTg5naBUYNbsbDtETKzSZZ4dUG7UpJgs96JPv'
            const recipientAddress = 'LQMBL9hUnHsybNxDVbKaeQYaepFX34H67d'

            const amount = 490000  // 490000 satoshis = 0.0049 BTC/DASH/DOGE/LTC
            shb.getTxId(uri,address)
                .then(txId=>{
                    const res = shb.sign(txId, senderPrivateKey, recipientAddress, amount)
                    console.log(res)
                })
                
            //const shb = new SHLitecoin()                                
            //const shb = new SHDash()
            //const shb = new SHDogecoin()  
            //const shb = new SHEthereum()
            //const a = shb.create(phrase,0,0,0)
            //console.log(a)
        }
    }, [])

    return (
        <>
            <div></div>
        </>
    )
}