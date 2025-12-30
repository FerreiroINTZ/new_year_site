import Hero from "./components/hero/hero"
import Timer from "./components/timer/timer"
import Quiz from "./components/quiz/quiz"
import CTA1 from "./components/cta/cta"
import FinalQuiz from "./components/finalQuiz/finalQuiz"
import FinalPhrase from "./components/finalPhrase/finalPhrase"
import Cta2 from "./components/cta2/cta2"

function App() {
  return (
    <>
      <Hero/>
      <Timer />
      {/* quiz 1 */}
      <Quiz />
      <CTA1 />
      {/* quiz 2 */}
      <Quiz side={true}/>
      <FinalQuiz />
      {/* <FinalPhrase /> */}
      {/* <Cta2 /> */}
      {/* <div id='footer'></div> */}
    </>
  )
}

export default App