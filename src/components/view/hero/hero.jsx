import style from "./hero.module.css"
import Fireworks from "@fireworks-js/react"

import { useRef } from "react"

function hero({nome, text}) {

    const r = useRef(false)

  return (
    <section id={style.hero}>
        <div id={style.textWrapper}>
            <p>{nome} <span>mandou</span></p>
            <div id={style.title}>
                <h1>FELIZ <span>ANO NOVO</span></h1>
                <p id={style.texto}>"{text}"</p>
            </div>
        </div>
        { r.current && <Fireworks
            options={{
                intensity: 10,
                opacity: 1,
                particles: 300,
                friction: .95,
                traceLength: 1
            }}
            style={{
                // background: "red", 
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "100%",
                height: "100%",
                "z-index": 1}}
        />}
    </section>
  )
}

export default hero