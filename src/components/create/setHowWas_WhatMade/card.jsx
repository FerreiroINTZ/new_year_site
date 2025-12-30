import style from "./setHowWas_WhatMade.module.css"

function card({icon, label, opt}) {
  return (
    <li className={style.card}>
        <input type="radio" name={`howWas_${opt}`} id={label}/>
        <label htmlFor={label}>
            <div className={style.checkBox}><span>x</span></div>
            <div><img src={icon}/></div>
            <p>{label}</p>
        </label>
    </li>
  )
}

export default card