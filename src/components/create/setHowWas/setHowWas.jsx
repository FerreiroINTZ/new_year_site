import style from "./setHowWas.module.css"

import Card from "./card"

// import hardIcon from "../../../../public/icons/boxing.png"

function setHowWas() {

    const dados = [
        {icon: "/public/icons/boxing.png", label: "Dificil"},
        {icon: "/public/icons/boxing.png", label: "Disilinado"},
        {icon: "/public/icons/boxing.png", label: "Tagico"},
        {icon: "/public/icons/boxing.png", label: "Faci"},
        {icon: "/public/icons/boxing.png", label: "Faci"},
        {icon: "/public/icons/boxing.png", label: "Faci"},
        {icon: "/public/icons/boxing.png", label: "Faci"},
    ]

  return (
    <section id={style.setHowWas}>
        <h1>como foi seu <span id={style.word_2025}>2025</span><span id={style.interrogacao}>?</span></h1>
        <div id={style.setContainer}>
            <div className={style.cardWrapper}>
                <p className={style.cardTitle}><span>escolha</span> uma <br />das opcoes</p>
                <ul>
                    {dados.map((x, index) =>
                        <Card
                            key={index}
                            icon={x.icon}
                            label={x.label}/>
                    )}
                </ul>
            </div>
            <hr />
            <div className={style.cardWrapper}>
                <p className={style.cardTitle}><span>descreva</span> em <br />poucas palavras</p>
                <textarea></textarea>
            </div>
        </div>
    </section>
  )
}

export default setHowWas