import style from "./whatExpect.module.css"

import { useContext } from "react"
import {Context} from "../context"

function selectOption({close}) {

    const {qz3Opts, setInfos} = useContext(Context)

  return (
    <div id={style.selectOptionContainer} onClick={() => close(false)}>
        <div id={style.card} onClick={e => e.stopPropagation()}>
            <ul>
                {qz3Opts.current.map((x, index) =>
                <li key={index}>
                    <button
                        data-radio="3"
                        value={x}
                        onClick={e => {
                        close(false)
                        console.log(x)
                        setInfos(e.target)
                        }}>
                            <img
                                data-radio={"3"}
                            onClick={e => e.stopPropagation()}
                            src={`/icons/all/${x.toLowerCase()}.png`} 
                            alt={x}/>
                    </button>
                </li>
                )}
            </ul>
        </div>
    </div>
  )
}

export default selectOption