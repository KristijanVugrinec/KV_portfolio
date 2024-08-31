import style from "./Projects.module.css"
import { useState,useEffect } from "react"
import { useInView } from "react-intersection-observer"
import weatherApp from './projects/WeatherApp.png'


function Projects () {
    const [text,setText] = useState("")


    useEffect(() => {
        setText("</error>")
    },[])


    const { ref, inView,  } = useInView({
        threshold: 0,
        triggerOnce:true,
      })

return (
<div className={style.main} ref={ref}>
    <div className={style.projectsText}>
<p className={`${style.title} ${inView ? style.visible : style.hidden}`}>PROJECTS</p>
    </div>
<div className={`${style.box} ${inView ? style.visible : style.hidden} `}>
    <div className={style.weatherApp}>
        <img src={weatherApp} className={style.weatherAppPicture} />
        <div className={style.description}>
        <p><a href="https://instantweathernow.netlify.app" target="_blank">Weather App</a></p>
        <p>Simple weather app providing accurate, up-to-date weather for the current day.</p>
        </div>
    </div>
</div>
</div>
)
}


export default Projects
