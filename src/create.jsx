import Title from "./components/create/title/title" 
import SetName from "./components/create/setName/setName"
import SetHowWas_WhatMade from "./components/create/setHowWas_WhatMade/setHowWas_WhatMade"
import WhatExpect from "./components/create/whatExpect/whatExpect"
import SendSection from "./components/create/sendSection/sendSection"

function create() {
  return (
    <>
        <Title />
        <SetName />
        <SetHowWas_WhatMade opt={0}/>
        <SetHowWas_WhatMade opt={1}/>
        <WhatExpect />
        <SendSection />
    </>
  )
}

export default create