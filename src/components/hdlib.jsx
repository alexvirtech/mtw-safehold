// create account for a number of networks
import { useState, useEffect, useRef } from 'preact/hooks'

export default function HDLibAccount({ mnemonic = null, coin = 0, account = 0, change = 0, index = 0, callback = console.log, tm }) {
    useEffect(() => {
        if (tm) {
            if (!window.generateMnemonic) return
            if (!mnemonic) {
                mnemonic = window.generateMnemonic()
            }
            const a = window.createAccount(mnemonic, coin, account, change, index)
            callback(a)
        }
    }, [tm])

    return null
}