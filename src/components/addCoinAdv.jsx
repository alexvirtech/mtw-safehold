import { mStyles } from "../utils/styles"
import { coinList } from "../utils/coinList"
import { useState, useEffect } from "preact/hooks"

const AddCoinAdv = ({ submit = console.log}) => {
    const [acc, setAcc] = useState(0)
    const [change, setChange] = useState(0)
    const [index, setIndex] = useState(0)
    const [coin, setCoin] = useState('')
    const [derivation, setDerivation] = useState('')
    const [symbol, setSymbol] = useState(null)
    const [list, setList] = useState([])
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
            setAcc(0)
            setChange(0)
            setIndex(0)
        }
    }, [symbol])

    const getDerivation = () => {
        return `${coin}${acc}/${change}/${index}`
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = { symbol, derivation: getDerivation() }
        submit(data)
    }
    // Combine X1, X2, and X3 to form the complete derivation path
    //const derivationPath = `m/44'/0'/${x1}/${x2}/${x3}`

    return (
        <div class="max-w-[300px] mx-auto my-4">
            <form onSubmit={handleSubmit}>
                <div>
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
                <div class="my-4">
                    <div class="flex justify-between gap-2 mb-1">
                        <div class={mStyles.label}>Derivation path</div>
                    </div>
                    <div class="flex border border-m-blue-light-4 rounded px-1 bg-white ">
                        <div class="py-2 pl-3 w-[90px]">{coin}</div>
                        <input
                            type="number"
                            min="0"
                            step="1"
                            value={acc}
                            onInput={(e) => setAcc(parseInt(e.target.value))}
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
                <div class="mt-4 mb-2">
                    <button type="submit" class={mStyles.button + " w-full"}>Create</button>
                </div>
            </form>
        </div>
    )
}

export default AddCoinAdv
