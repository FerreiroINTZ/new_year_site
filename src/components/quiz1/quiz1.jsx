import style from "./quiz1.module.css"

function quiz1() {

    const nome = "Gabriel Felipe"
    const opt = "sfddfdfdfd"
    const depoimnto = "Lorem ipsum dolor sit amet consectetur. Tellus id sapien feugiat egestas lacus facilisi turpis neque"
    const depoOpt = "Lorem ipsum dolor sit amet consectetur. Tellus id sapien feugiat egestas lacus facilisi turpis neque."

  return (
    <section id={style.quiz1}>
        <h3>Como foi o <span id={style.leter2025}>2025</span> de <br /> <span id={style.userName}>{nome}</span></h3>
        <div id={style.contentWrapper}>
            <div id={style.card}>
                <p>{opt.toUpperCase()}</p>
                <img src="/icons/boxing.png" alt="nada" />
            </div>
            <div id={style.text}>
                <p style={{"--userName": `'${nome}'`}} id={style.depoimento}>"{depoimnto}"</p>
                <p id={style.cardText}>{depoOpt}</p>
            </div>
        </div>
    </section>
  )
}

export default quiz1