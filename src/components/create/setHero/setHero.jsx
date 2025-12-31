import style from "./setHero.module.css"

import { useContext } from "react"
import {Context} from "../context"

function setHero() {

  const {setInfos} = useContext(Context)

  return (
    <section id={style.setHero}>
        <h2>
          diga uma frase de <br /><span>FELIZ ANO NOVO!</span>
        </h2>
        <div id={style.writeContanier}>
          <span id={style.boxIcon}>
            <img src="/public/icons/partyIcon.png" alt="" />
          </span>
          <textarea
            name="hero"
          onChange={e => setInfos(e.target)}>
          </textarea>
        </div>
    </section>
  )
}

export default setHero