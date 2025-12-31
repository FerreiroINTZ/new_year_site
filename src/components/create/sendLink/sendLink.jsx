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
        <h1>Seu Link foi criado com <br /><span>sucesso!</span></h1>
        <div id={style.linkWrapper}><a href={shareLink} target="_blank">ACESSAR LINK</a></div>
        <div id={style.actionsBtnsWrapper}>
          <button id={style.shareBtn} onClick={share}>Compartilhar</button>
          <button id={style.coppyBtn} onClick={() => navigator.clipboard.readText(shareLink)}>COPIAR</button>
          <button id={style.editBtn} onClick={() => setShareLinkContainer(false)}>EDITAR</button>
        </div>
      </div>
    </div>
    )
    }

    return(<></>)
}

export default sendLink