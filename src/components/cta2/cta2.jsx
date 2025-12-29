import style from "./cta2.module.css"

export default function cta2() {
  return (
    <div id={style.cta2}>
        <p>faca sua <br /><span>Retrospectiva</span></p>
            <button>CRIAR AGORA</button>
            <br />
            <span id={style.aboveText}>Leva 1 <span>minuto</span> <br/>e fica <span>incrivel!</span></span>
    </div>
  )
}
