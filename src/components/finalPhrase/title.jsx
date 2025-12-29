import style from "./finalPhrase.module.css"

function title() {
  return (
    <div id={style.title}>
        <div></div>
        <div id={style.titleContent}>
            frase de <br /><span>Encerramento</span>
        </div>
        <div></div>
    </div>
  )
}

export default title