import style from "./finalPhrase.module.css"

import Title from "./title"

function finalPhrase() {

  const depoimento = "Lorem ipsum dolor sit amet consectetur. Arcu et lorem ut aliquam semper quis gravida viverra eu. Aenean nam turpis vitae enim eu vel ipsum. Dui gravida libero ultrices libero ipsum ac est"

  const nome = "Gabiel Felipe"

  return (
    <section id={style.finalPhrase}>
      <Title />
      <div 
        id={style.content}
        style={{"--userName": `'${nome}'`}}>
        "{depoimento}"
      </div>
    </section>
  )
}

export default finalPhrase