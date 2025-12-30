import style from "./cta1.module.css"

import { Link } from "react-router-dom"

function pt2() {
  return (
    <div id={style.pt2}>
        <p>Agora é sua vez de <span id={style.word_criar}>criar</span><br id={style.br}/> a sua <span id={style.word_retrospectiva}>Retrospectiva</span></p>
        <button><Link to="/criar">CRIAR AGORA</Link></button>
        <span id={style.aboveText}>Leva 1 <span>minuto</span> <br/>e fica <span>incrivel!</span></span>
    </div>
  )
}

export default pt2