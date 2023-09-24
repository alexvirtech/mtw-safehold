import { mStyles } from "../utils/styles"
import { coinList } from "../utils/coinList"
import { useState, useEffect } from "preact/hooks"

const AddCoinSH = ({ callback = console.log }) => {
    const [account, setAccount] = useState(0)
    const [change, setChange] = useState(0)
    const [index, setIndex] = useState(0)
    const [coin, setCoin] = useState('')
    //const [derivation, setDerivation] = useState('')
    const [symbol, setSymbol] = useState(null)
    const [list, setList] = useState([])
    //const [mnemonic, setMnemonic] = useState('')
    //const testDp = 'm/44\'/60\'/'

    useEffect(() => {
        const lst = Object.entries(coinList).filter(([sym, val]) => val.purpose)
        setList(lst)
        // 
        setSymbol("BTC")
    }, [])

    useEffect(() => {
        const ls = list.find(l => l[0] === symbol)
        if (symbol && ls[1].dp) {
            setCoin(`m/${ls[1].purpose}'/${ls[1].coin}'/`)
            setAccount(0)
            setChange(0)
            setIndex(0)
        }
    }, [symbol])

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = { symbol, coin, account, change, index }
        submit(data)
    }

    useEffect(() => {
        callback({ symbol, coin, account, change, index })
    }, [symbol, coin, account, change, index])

    return (
        <div class="w-[500px] mx-auto">
            <div class="flex justify-start gap-4">
                <div class="grow">
                    <div class={mStyles.label + " mb-1"}>Asset</div>
                    <div class=" border-m-blue-light-4 border rounded-md">
                        <select class={mStyles.select + " text-left"} onChange={(e) => setSymbol(e.target.value)}>
                            {
                                list.map(([sym, data]) => {
                                    return <option value={sym} selected={symbol === sym}>{sym}: {data.name}</option>
                                })
                            }
                        </select>
                    </div>
                </div>
                <div class="">
                    <div class="flex justify-between gap-2 mb-1">
                        <div class={mStyles.label}>Derivation path</div>
                    </div>
                    <div class="flex border border-m-blue-light-4 rounded px-1 bg-white ">
                        <div class="py-2 pl-3 w-[90px]">{coin}</div>
                        <input
                            type="number"
                            min="0"
                            step="1"
                            value={account}
                            onInput={(e) => setAccount(parseInt(e.target.value))}
                            onClick={(e) => e.target.select()}
                            class={"border-none px-0 py-2 mx-0 w-12 text-center font-bold bg-transparent"}
                            placeholder="_"
                            required
                        />
                        <span class="py-2 px-0">/</span>
                        <input
                            type="number"
                            min="0"
                            step="1"
                            max="1"
                            value={change}
                            onInput={(e) => setChange(parseInt(e.target.value))}
                            onClick={(e) => e.target.select()}
                            class="border-none px-0 py-2 mx-0 w-12 text-center font-bold bg-transparent"
                            placeholder="_"
                            required
                        />
                        <span class="py-2 px-0">/</span>
                        <input
                            type="number"
                            min="0"
                            step="1"
                            value={index}
                            onInput={(e) => setIndex(parseInt(e.target.value))}
                            onClick={(e) => e.target.select()}
                            class="border-none px-0 py-2 mx-0 w-12 text-center font-bold bg-transparent"
                            placeholder="_"
                            required
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCoinSH
