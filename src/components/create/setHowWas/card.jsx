import style from "./setHowWas.module.css"

function card({icon, label}) {
  return (
    <li className={style.card}>
        <input type="radio" name="howWas" id={label}/>
        <label htmlFor={label}>
            <div className={style.checkBox}><span>x</span></div>
            <div><img src={icon}/></div>
            <p>{label}</p>
        </label>
    </li>
  )
}

export default card