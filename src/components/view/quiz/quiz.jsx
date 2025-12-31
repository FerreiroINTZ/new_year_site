import style from "./quiz1.module.css"

const Title1 = ({nome}) =>{
    return(
        <h3 id={style.title1}>Como foi o <span id={style.leter2025}>2025</span> de <br /> <span id={style.userName}>{nome}</span></h3>
    )
}

const Title2 = ({nome}) =>{
    return(
        <h3 id={style.title2}>O que <span id={style.nome}>{nome}</span> <br />mais fez em <span id={style.leter2025pt2}>2025</span></h3>
    )
}

function quiz1({side, nome, texto1, texto2}) {

    const opt = "sfddfdfdfd"
    const depoimnto = "Lorem ipsum dolor sit amet consectetur. Tellus id sapien feugiat egestas lacus facilisi turpis neque"
    const depoOpt = "Lorem ipsum dolor sit amet consectetur. Tellus id sapien feugiat egestas lacus facilisi turpis neque."

  return (
    <section id={style.quiz1}>
        {side ? <Title2 nome={nome}/> : <Title1 nome={nome}/>}
        <div
            style={{flexDirection: side ? "row-reverse" : "row"}} 
            id={style.contentWrapper}>
            <div id={style.card}>
                <p>{opt.toUpperCase()}</p>
                <img src="/icons/boxing.png" alt="nada" />
            </div>
            <div id={style.text}>
                <p style={{"--userName": `'${nome}'`}} id={style.depoimento}>"{side ? `${texto2}` : `${texto1}`}"</p>
                <p id={style.cardText}>{depoOpt}</p>
            </div>
        </div>
    </section>
  )
}

export default quiz1