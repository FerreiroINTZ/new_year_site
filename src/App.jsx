import Hero from "./components/hero/hero"
import Timer from "./components/timer/timer"
import Quiz1 from "./components/quiz1/quiz1"

function App() {
  return (
    <>
      <Hero/>
      <Timer />
      <Quiz1 />
      <Quiz1 side={true}/>
    </>
  )
}

export default App