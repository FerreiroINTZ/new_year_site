import { createContext, useRef, useEffect, useReducer } from "react"

export const Context = createContext()

function ContxtComponent({children}){

    const infosMolde = {
        name: "",
        hero: "",
        qz1: "",
        qz2: "",
        qz3: "",
        depth: "",
        opts: [null, null, null]
    }

    function chageInfos(currl, vall){
        console.log("data")
        if(vall.dataset.radio){
            console.log(vall.dataset.radio)
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
        // "Saiu",
        "Comeu",
        "Fez algo novo",
        "Jogou Esportes",
        "Assistiu Filmes",
        "Namorou",
        "Viajou",
        "Desenhou",
        "Jogou Video Game",
    ])

    useEffect(() =>{
        console.log(infos)
    }, [infos])

    return(
        <Context.Provider value={{name: infos.name, setInfos, qz1Opts, qz2Opts}}>
            {children}
        </Context.Provider>
    )
}

export default ContxtComponent