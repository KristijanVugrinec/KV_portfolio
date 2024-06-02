import style from "./Projects.module.css"
import { useState,useEffect } from "react"


function Projects () {
    const [text,setText] = useState("")


    useEffect(() => {
        setText("</error>")
    },[])

return (
<div className={style.main}>
<p className={style.title}>PROJECTS</p>
<div className={style.box}>
    <p className={style.text}>{text}</p>
</div>
</div>
)
}


export default Projects
