import style from "./whatExpect.module.css"

function finalQuiz() {

    const nome = "Gabriel Felipe"

  return (
    <section id={style.finalQuiz}>
        <div id={style.title}>
            <p>o que voce epera para</p>
            <p id={style.word_2026}>2026</p>
        </div>
        <div id={style.card}>
            <input type="text" placeholder="Novas Amizades" maxLength="16"/>
            <img src="/icons/group.png" alt="icon"/>
        </div>
    </section>
  )
}

export default finalQuiz