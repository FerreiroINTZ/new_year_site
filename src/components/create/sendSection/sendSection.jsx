import style from "./sendSection.module.css"

function sendSection() {
  return (
    <section id={style.sendSection}>
        <p>sera gerado um <span>link</span> para sua Retrospectiva, no qual voce usara para <span>compartilhar</span></p>
        <button>PUBLICAR</button>
    </section>
  )
}

export default sendSection