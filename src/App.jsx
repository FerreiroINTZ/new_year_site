import Hero from "./components/view/hero/hero"
import Timer from "./components/view/timer/timer"
import Quiz from "./components/view/quiz/quiz"
import CTA1 from "./components/view/cta/cta"
import FinalQuiz from "./components/view/finalQuiz/finalQuiz"
import FinalPhrase from "./components/view/finalPhrase/finalPhrase"
import Cta2 from "./components/view/cta2/cta2"

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
      <FinalPhrase />
      <Cta2 />
      <div id='footer'></div>
    </>
  )
}

export default App