import ContextComp from "./components/view/contxt"

import Hero from "./components/view/hero/hero"
import Timer from "./components/view/timer/timer"
import Quiz from "./components/view/quiz/quiz"
import CTA1 from "./components/view/cta/cta"
import FinalQuiz from "./components/view/finalQuiz/finalQuiz"
import FinalPhrase from "./components/view/finalPhrase/finalPhrase"
import Cta2 from "./components/view/cta2/cta2"

import { useContext } from "react"
import {Context} from "./components/view/contxt"

function App() {

  const {data} = useContext(Context)
  console.log("data: ", data)

  return (
    <>
      <Hero nome={data.name} text={data.hero}/>
      <Timer />
      {/* quiz 1 */}
      <Quiz nome={data.name} texto1={data.qz1}/>
      <CTA1 />
      {/* quiz 2 */}
      <Quiz side={true} texto2={data.qz2}/>
      <FinalQuiz nome={data.name} texto={data.qz3}/>
      <FinalPhrase nome={data.name} texto={data.deph}/>
      <Cta2 />
      <div id='footer'></div>
      </>
  )
}

export default App