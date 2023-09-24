// create account for a number of networks
import { useState, useEffect, useRef } from 'preact/hooks'

export default function HDLibAccount({ mnemonic = null, coin = 0, account = 0, change = 0, index = 0, callback = console.log, tm }) {
   
    useEffect(() => {
        console.log({mnemonic,coin,account,change,index})
    }, [])

    useEffect(() => {
        console.log({mnemonic,coin,account,change,index})
    }, [mnemonic,coin,account,change,index])

    useEffect(() => {
        if (tm) {
            if (!window.generateMnemonic) return
            if (!mnemonic) {
                mnemonic = window.generateMnemonic()
            }
            const path = `${coin}${account}'/${change}`
            const a = window.createAccountSH(mnemonic, path, index)
            callback(a)
        }
    }, [tm])

    return null
}