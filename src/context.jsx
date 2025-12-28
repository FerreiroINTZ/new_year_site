import { Children, createContext } from "react";

const Context = createContext()

export default function contexto({children}){
    return(
        <Context.Provider value={{}}>
            {children}
        </Context.Provider>
    )
}