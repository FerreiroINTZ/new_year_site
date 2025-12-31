import style from "./setHowWas_WhatMade.module.css"

import { useContext } from "react"
import { Context } from "../context"

function card({label, opt}) {

  const {setInfos} = useContext(Context)

  return (
    <li className={style.card}>
        <input 
          type="radio" 
          data-radio={!opt ? "1" : "2"}
          value={label}
          name={`howWas_${opt}`}
          onChange={e => setInfos(e.target)} 
          id={label}/>
        <label htmlFor={label}>
            <div className={style.checkBox}><span>x</span></div>
            <div><img src={`/icons/${!opt ? "howWasIcons" : "madeMoreIcons"}/${label?.toLowerCase()}.png`}/></div>
            <p>{label}</p>
        </label>
    </li>
  )
}

export default card