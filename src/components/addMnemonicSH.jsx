import { mStyles } from "../utils/styles"
import { useState, useEffect } from "preact/hooks"

export default function ComAddMnemonicSH({callback = console.log}) {
    const [mnemonic, setMnemonic] = useState('')
    const handleGenerate = () => {
        if(window.generateMnemonic) setMnemonic(window.generateMnemonic())
    }

    useEffect(() => {
        callback(mnemonic)
    }, [mnemonic])

    return (
        <>
        <div class="w-[500px] mx-auto mt-4">
        <div class="flex justify-between gap-2">
                    <div class={mStyles.label + " mb-1"}>Mnemonic phrase</div>
                    <div><button class={mStyles.link} onClick={handleGenerate}>generate new</button></div>
                </div>
                <textarea class={mStyles.textInput + " mb-2"} rows="2" placeholder="Enter your mnemonic phrase"
                onInput={(e) => setMnemonic(e.target.value)} required value={mnemonic}/>
        </div>
        </>
    )
}