import style from "./cta1.module.css"

import Pt1 from "./pt1"
import Pt2 from "./pt2"

function cta() {
  return (
    <div id={style.cta1}>
        <Pt1 />
        {/* <Pt2 /> */}
    </div>
  )
}

export default cta