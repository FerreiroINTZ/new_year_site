import style from "./hero.module.css"
import Fireworks from "@fireworks-js/react"


function hero() {

    const texto = "Lorem ipsum dolor sit amet consectetur. Ut proin id morbi nulla vitae a fermentum"

  return (
    <section id={style.hero}>
        <div id={style.textWrapper}>
            <p>{"Gabrieil Felipe"} <span>mandou</span></p>
            <div id={style.title}>
                <h1>FELIZ ANO NOVO</h1>
                <p id={style.texto}>"{texto}"</p>
            </div>
        </div>
        {/* <Fireworks 
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
                height: "100%"}}
        /> */}
    </section>
  )
}

export default hero