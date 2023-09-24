import HDLibAccount from "./hdlib"
import { useState, useEffect } from 'preact/hooks'
import AddCoinSH from "./addCoinSH"
import ComAddMnemonicSH from "./addMnemonicSH"
import { mStyles } from "../utils/styles"

export default function Test1() {
    const [tm, setTm] = useState(null)
    const [account, setAccount] = useState()
    const [mnemonic, setMnemonic] = useState('exotic coach vintage sustain noise design cereal become file critic dove decade')
    const [res, setRes] = useState()

    useEffect(() => {
        //setTm(new Date().getTime())
    }, [])

    /* const handleAccount = (a) => {
         //setMnemonic(a.mnemonic)
         setAccount(a)
     }*/

    const handleCreate = () => {
        //setRes({...account, mnemonic})
        const tm1 = new Date().getTime()
        setTm(tm1)
    }

    const getDerivation = () => {
        return `${coin}${account}/${change}/${index}`
    }

    return (
        <>
            <div class="mt-4 w-[800px] mx-auto">
                <ComAddMnemonicSH callback={(m) => setMnemonic(m)} />
                <AddCoinSH callback={(data) => setAccount(data)} />
                <div class="mt-8 flex justify-center">
                    <button type="button" class={mStyles.button} onClick={handleCreate}>Create Account</button>
                </div>
                {mnemonic!=='' && account && res && <div>
                    <div class="mt-4">
                        <div class={mStyles.labelB + " mb-1"}>Inputs:</div>
                    </div>
                    <div class="mt-4">
                        <pre>{mnemonic}</pre>
                    </div>
                    <div class="mt-4">
                        <pre>{JSON.stringify(account, null, 2)}</pre>
                    </div>
                    <div class="mt-4">
                        <div class={mStyles.labelB + " mb-1"}>Outputs:</div>
                    </div>
                    <div class="mt-4">
                        <pre>{JSON.stringify(res, null, 2)}</pre>
                    </div>
               </div>}
                {/*<div class="mt-4 break-all">{sign}</div>*/}

            </div>
            <HDLibAccount callback={setRes} tm={tm} mnemonic={mnemonic}
                coin={account ? account.coin : 0} account={account ? account.account: 0} 
                change={account ? account.change : 0} index={account ? account.index : 0} />
        </>
    )
}