import style from "./setFInalDepth.module.css"

import { useContext } from "react"
import {Context} from "../context"

function setFInalDepth() {

  const {setInfos} = useContext(Context)

  return (
    <section id={style.setFInalDepth}>
        <h2>
          <span id={style.mainTitleWrapper}><span id={style.porFim}>por fim</span> <br/>diga algo para <span id={style.word_encerrar}>encerrar</span></span> <span id={style.word_2025}>2025</span>
        </h2>
        <div id={style.writeContanier}>
          <span id={style.faixas}></span>
          <span id={style.boxIcon}>
            <img src="/public/icons/crown.png" alt="" />
          </span>
          <textarea
            name="depth"
          onChange={e => setInfos(e.target)}>
          </textarea>
        </div>
    </section>
  )
}

export default setFInalDepth