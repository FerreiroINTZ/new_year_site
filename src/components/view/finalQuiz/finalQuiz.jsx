import style from "./finalQuiz.module.css"

function finalQuiz({nome, texto, icon}) {

  return (
    <section id={style.finalQuiz}>
        <div id={style.title}>
            <p>O que <span id={style.nome}>{nome}</span> <br/>deseja para</p>
            <p id={style.word_2026}>2026</p>
        </div>
        <div id={style.card}>
            <p>{texto}</p>
            <img src={`/icons/all/${icon?.toLowerCase()}.png`} alt="icon"/>
        </div>
    </section>
  )
}

export default finalQuiz