import { createContext, useRef, useEffect, useReducer, useState } from "react"
import LZString from "lz-string"

export const Context = createContext()

function ContxtComponent({children}){

    const [hableToSend, setHableToSend] = useState(false)
    const [shareLink, setShareLink] = useState("http://localhost:5173/?d=N4IgdghgtgpiBcIBmBnAJqjIA0IAWMATgPYIhoqZI4gCOAXgIxnpU0MBMLGr79AzNza40MAA54ySCsJDExAFxQIA2iAAiMFBCQBLCGmKEaAURQKAroYs4wFgDb2AugF8gA")
    const [shareLinkContainer, setShareLinkContainer] = useState(false)

    const infosMolde = {
        name: "",
        hero: "",
        qz1: "",
        qz2: "",
        qz3: "",
        deph: "",
        opts: [null, null, "group"]
    }

    function chageInfos(currl, vall){
        console.log("data")
        console.warn(vall.dataset.radio)
        if(vall.dataset.radio){
            console.log(vall.value)

            const slw = currl.opts.map((x, index) => 
                index + 1 == vall.dataset.radio ? vall.value : x)

            const newInfos = {...currl, opts: slw}
            return newInfos
        }

        const newInfos = {...currl, [vall.name]: vall.value}
        return newInfos
    }

    const [infos, setInfos] = useReducer(chageInfos, infosMolde)

    // verifica se todos os campos ja foram feitos
    useEffect(() =>{
        console.log(infos)
        const keys = Object.keys(infos)
        const notFilled = keys.filter(x => {
            console.warn(x)
            if(x == "opts"){
                const verify = infos.opts.filter(y => y)
                console.warn(verify.length >= 2)
                return verify.length >= 2
            }else{
                if(infos[x]){
                    return true
                }
            }
        })
        console.log("notFilled: ")
        console.log(keys.length)
        console.log(notFilled.length)
        if(notFilled.length >= keys.length){
            console.warn("sdsds")
            setHableToSend(true)
        }else{
            setHableToSend(false)
        }
    }, [infos])

    const qz1Opts = useRef([
        "Desafiador",
        "Chato",
        "Neutro",
        "Cansativo",
        "Diplomatico",
        "Trabalhoso",
        "Emocionante",
        "Ruim",
        "Amoroso",
        "Responsa",
        "Abencoado",
    ])

    const qz2Opts = useRef([
        "Assitiu Series",
        "Estudou",
        "Trabalhou",
        "Comemorou",
        "Comeu",
        // "Fez algo novo",
        "Jogou Esportes",
        "Assistiu Filmes",
        "Namorou",
        "Viajou",
        "Desenhou",
        "Jogou Video Game",
    ])

    const qz3Opts = useRef([
        "Desafiador",
        "Chato",
        "Neutro",
        "Cansativo",
        "Diplomatico",
        "Trabalhoso",
        "Emocionante",
        "Ruim",
        "Amoroso",
        "Responsa",
        "Abencoado",
        "Assitiu Series",
        "Estudou",
        "Trabalhou",
        "Comemorou",
        "Comeu",
        // "Fez algo novo",
        "Jogou Esportes",
        "Assistiu Filmes",
        "Namorou",
        "Viajou",
        "Desenhou",
        "Jogou Video Game",
    ])

    function createSite(){
        if(!hableToSend){
            return
        }

        // trasnforma o objeo em string
        let link = JSON.stringify(infos)
        // comprime ele
        link = LZString.compressToEncodedURIComponent(link)
        // encode ela para URL
        // link = encodeURIComponent(link)
        // monta o URL
        link = `${window.location.host}?d=${link}`
        setShareLinkContainer(true)
        setShareLink(link)
        console.log("FInal!")
    }

    return(
        <Context.Provider value={{name: infos.name, setInfos, qz1Opts, qz2Opts, hableToSend, createSite, shareLinkContainer, setShareLinkContainer, shareLink, qz3Opts, icon: infos.opts[2]}}>
            {children}
        </Context.Provider>
    )
}

export default ContxtComponent