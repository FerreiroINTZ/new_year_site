import { useContext, useEffect } from "react"
import {Context} from "../context"
import style from "./setName.module.css"

function setName() {

  const {name, setInfos} = useContext(Context)

  useEffect(() =>{
    console.log(name)
  }, [])

  return (
    <section id={style.setName}>
        <label>Nome</label>
        <input 
          type="text" 
          name="name" 
          placeholder="exemplo..." 
          defaultValue={name}
          maxLength="15"
          onChange={e => setInfos(e.target)}/>
    </section>
  )
}

export default setName