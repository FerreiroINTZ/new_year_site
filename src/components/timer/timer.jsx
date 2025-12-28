import React, { useEffect, useState } from "react"
import style from "./timer.module.css"

const Card = ({label, date}) =>{

    const newDate = date

    useEffect(()=>{
        console.log(date)
    }, [])

    return(
        <>
            <div className={style.singleTime}>
                <p>{label.toUpperCase()}</p>
                <div className={style.singlNumber}>
                    <div>{newDate[0]}</div>
                    <div>{newDate[1]}</div>
                </div>
            </div>
        </>
    )
}

function timer() {

    const times = ["dias", "horas", "minutos", "segundos"]
    
    const [currentDate, setCurrentDate] = useState([0, 0, 0, 0])

    function updateDate(){
        let date = new Date()
        console.log(date.getDate())
        date = `${31 - date.getDate()} ${24 - date.getHours()} ${ 60 - date.getMinutes()} ${ 60 - date.getSeconds()} ${date.getMilliseconds()}`
        date = date.split(" ").map(x => x < 10 ? `0${x}` : x)
        setCurrentDate(date)
    }


    useEffect(() => {
        let ss = new Date()
        ss = ss.getMilliseconds()
        console.log(typeof ss)
        console.log(ss)
        updateDate()
        const slw = setTimeout(() =>{
            setInterval(()=>{
                console.log("sdsdsd")
                updateDate()
            }, 1000)
        }, ss)

        return () => clearTimeout(slw)
    }, [])

  return (
    <section id={style.timer}>
        <p id={style.text}>O tempo não para<br/>Um novo ciclo está chegando</p>
        <div id={style.time}>
            {times.map((x, index) =>
            <React.Fragment key={index}>
                {index && <span>:</span>}
                <Card date={currentDate[index]} key={index} label={x}/>
            </React.Fragment>
            )}
        </div>
        <div id={style.text2}>
            <p>PARA</p>
            <h2>2026</h2>
        </div>
    </section>
  )
}

export default timer