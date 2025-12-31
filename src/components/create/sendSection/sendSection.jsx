import style from "./sendSection.module.css"

import { useContext } from "react"
import {Context} from "../context"

function sendSection() {

  const {hableToSend, createSite} = useContext(Context)

  return (
    <section id={style.sendSection} className={hableToSend ? style.enabled : style.disabled}>
        <p>sera gerado um <span>link</span> para sua Retrospectiva, no qual voce usara para <span>compartilhar</span></p>
        <button onClick={() => createSite()}>{hableToSend ? "VER LINK" : "INCOMPLETO"}</button>
    </section>
  )
}

export default sendSection