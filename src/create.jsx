import Context from "./components/create/context"

import Title from "./components/create/title/title" 
import SetName from "./components/create/setName/setName"
import SetHero from "./components/create/setHero/setHero"
import SetHowWas_WhatMade from "./components/create/setHowWas_WhatMade/setHowWas_WhatMade"
import WhatExpect from "./components/create/whatExpect/whatExpect"
import SetFinalDeph from "./components/create/setFinalDepth/setFInalDepth"
import SendSection from "./components/create/sendSection/sendSection"

function create() {
  return (
    <Context>
        <Title />
        <SetName />
        <SetHero />
        <SetHowWas_WhatMade opt={0}/>
        <SetHowWas_WhatMade opt={1}/>
        <WhatExpect />
        <SetFinalDeph />
        <SendSection />
    </Context>
  )
}

export default create