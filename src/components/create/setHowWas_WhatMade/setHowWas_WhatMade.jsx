import style from "./setHowWas_WhatMade.module.css"

import Title1 from "./opts/title/title1"
import Title2 from "./opts/title/title2"

import Card from "./card"

// import hardIcon from "../../../../public/icons/boxing.png"

function SetHowWas_WhatMade({opt}) {

    const dados1 = [
        {icon: "/public/icons/boxing.png", label: "Dificil"},
        {icon: "/public/icons/boxing.png", label: "Disilinado"},
        {icon: "/public/icons/boxing.png", label: "Tagico"},
        {icon: "/public/icons/boxing.png", label: "Faci"},
        {icon: "/public/icons/boxing.png", label: "Faci"},
        {icon: "/public/icons/boxing.png", label: "Faci"},
        {icon: "/public/icons/boxing.png", label: "Faci"},
    ]

    const dados2 = [
        {icon: "/public/icons/boxing.png", label: "Assitindo Filmes"},
        {icon: "/public/icons/boxing.png", label: "Bebendo"},
        {icon: "/public/icons/boxing.png", label: "studando"},
        {icon: "/public/icons/boxing.png", label: "Dormindo"},
        {icon: "/public/icons/boxing.png", label: "Trabalahndo"},
        {icon: "/public/icons/boxing.png", label: "Descansando"},
        {icon: "/public/icons/boxing.png", label: "Viajando"},
    ]


  return (
    <section id={style.setHowWas}>
        {!opt ? <Title1 /> : <Title2 />}
        <div id={style.setContainer}>
            <div className={style.cardWrapper}>
                <p className={style.cardTitle}><span>escolha</span> uma <br />das opcoes</p>
                <ul>
                    {!opt 
                        ? dados1.map((x, index) =>
                            (<Card
                                key={index}
                                icon={x.icon}
                                label={x.label}
                                opt={opt}/>)
                            )
                        : dados2.map((x, index) =>
                            <Card
                                key={index}
                                icon={x.icon}
                                label={x.label}
                                opt={opt}/>
                            )
                    }
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

export default SetHowWas_WhatMade