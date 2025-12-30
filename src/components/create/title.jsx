import style from "./title.module.css"
function title() {
  return (
    <div id={style.title}>
        <h1>crie sua <br/><span>Restropectiva</span></h1>
        <div id={style.subTitle}>
            <p>leva <span>1 minuto</span></p>
            <p>e fica <span>Icrivel!</span></p>
        </div>
        <p id={style.aviso}>O conteudo da sua retrospectiva nao fica salvo em nosso site</p>
    </div>
  )
}

export default title