import style from "./whatExpect.module.css"

import { useContext } from "react"
import {Context} from "../context"

function finalQuiz() {

  const {setInfos} = useContext(Context)

    const nome = "Gabriel Felipe"

  return (
    <section id={style.finalQuiz}>
        <div id={style.title}>
            <p>o que voce epera para</p>
            <p id={style.word_2026}>2026</p>
        </div>
        <div id={style.card}>
            <input 
              type="text" 
              placeholder="Novas Amizades" 
              maxLength="16"
              name="qz3"
              onChange={e => setInfos(e.target)}/>
            <img src="/icons/group.png" alt="icon"/>
        </div>
    </section>
  )
}

export default finalQuiz