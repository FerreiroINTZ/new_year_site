import style from "./sendLink.module.css"

import { useContext } from "react"
import { Context } from "../context"

function sendLink() {

  const { shareLink, setShareLinkContainer, shareLinkContainer } = useContext(Context)

  function share(){
    // permite comartilhar, no celular
    navigator.share({
      title: "slw",
      url: window.location.host
    })
  }

  if(shareLinkContainer){
    console.log(shareLink)

    return (
      <div id={style.sendLink} onClick={() => setShareLinkContainer(false)}>
      <div id={style.card} onClick={e => e.stopPropagation()}>
        <h1>Seu Link foi criado com sucesso!</h1>
        <a href={shareLink} target="_blank">{shareLink}</a>
        <button onClick={share}>Compartilhar</button>
        <button onClick={() => navigator.clipboard.readText(shareLink)}>COPIAR</button>
      </div>
    </div>
    )
    }

    return(<></>)
}

export default sendLink