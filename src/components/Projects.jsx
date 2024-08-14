import style from "./Projects.module.css"
import { useState,useEffect } from "react"
import { useInView } from "react-intersection-observer"


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
    <p className={style.text}>{text}</p>
</div>
</div>
)
}


export default Projects
