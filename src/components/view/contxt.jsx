import { createContext, useEffect, useState } from "react" 
import { useSearchParams } from "react-router-dom"
import LZString from "lz-string"

export const Context = createContext()

function ContextComponent({children}){

    const dataModel = {
        name: "",
        hero: "",
        qz1: "",
        qz2: "",
        qz3: "",
        depth: "",
        opts: [null, null, null]
    }

    const [get, set] = useSearchParams()
    const [data, setData] = useState(dataModel)

    useEffect(() =>{
        try{
            let getData = get.get("d") 
            getData = LZString.decompressFromEncodedURIComponent(getData)
            getData = JSON.parse(getData)
            console.log(getData)
            setData(getData)
        }catch(e){
            console.warn(e)
            console.warn("Erro!")
        }
    }, [])

    return(
        <Context.Provider value={{data}}>
            {children}
        </Context.Provider>
    )
}

export default ContextComponent