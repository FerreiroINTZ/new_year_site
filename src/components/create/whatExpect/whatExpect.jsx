import style from "./whatExpect.module.css"

import SelectOption from "./selectOption"

import { useContext, useState } from "react"
import {Context} from "../context"

function finalQuiz() {
  const {setInfos, icon} = useContext(Context)
  console.log(icon)
  const [showOptions, setShowOtions] = useState(false)

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
            <div id={style.icon} onClick={() => setShowOtions(true)}>
              <img src={`/icons/all/${icon.toLowerCase()}.png`} alt="icon"/>
            </div>
        </div>
        {showOptions && <SelectOption close={setShowOtions}/>}
    </section>
  )
}

export default finalQuiz