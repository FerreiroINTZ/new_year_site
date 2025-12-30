import style from "./setName.module.css"

function setName() {
  return (
    <section id={style.setName}>
        <label>Nome</label>
        <input tye="text" placeholder="exemplo..."/>
    </section>
  )
}

export default setName