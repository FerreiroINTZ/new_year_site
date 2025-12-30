import style from "./finalQuiz.module.css"

function finalQuiz() {

    const nome = "Gabriel Felipe"

  return (
    <section id={style.finalQuiz}>
        <div id={style.title}>
            <p>O que <span id={style.nome}>{nome}</span> <br/>deseja para</p>
            <p id={style.word_2026}>2026</p>
        </div>
        <div id={style.card}>
            <p>Novas Amizades</p>
            <img src="/icons/group.png" alt="icon"/>
        </div>
    </section>
  )
}

export default finalQuiz