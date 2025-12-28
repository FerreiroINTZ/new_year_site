import style from "./cta1.module.css"

function pt2() {
  return (
    <div id={style.pt2}>
        <p>Agora é sua vez de <span id={style.word_criar}>criar</span><br/> a sua <span id={style.word_retrospectiva}>Retrospectiva</span></p>
        <button>CRIAR AGORA</button>
        <span id={style.aboveText}>Leva 1 <span>minuto</span> <br/>e fica <span>incrivel!</span></span>
    </div>
  )
}

export default pt2