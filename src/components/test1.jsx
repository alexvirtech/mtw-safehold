import HDLibAccount from "./hdlib"
import { useState, useEffect } from 'preact/hooks'
import { coinList } from "../utils/coinList"
import AddCoinAdv from "./addCoinAdv"

export default function Test1() {
    const [tm, setTm] = useState(null)
    const [account, setAccount] = useState('')
    //const [mnemonic, setMnemonic] = useState('')

    useEffect(() => {   
        setTm(new Date().getTime())
    }, [])

    const handleAccount = (a) => {
        //setMnemonic(a.mnemonic)
        setAccount(a)
    }

    return (
        <>
            <div class="mt-4 w-[800px] mx-auto">   

            <AddCoinAdv submit={(data)=>handleSubmit(data)} />
                <div class="mt-4">
                    <pre>{JSON.stringify(account, null, 2)}</pre>
                </div>
                {/*<div class="mt-4 break-all">{sign}</div>*/}
            </div>
            <HDLibAccount callback={handleAccount} tm={tm}/>
        </>
    )
}