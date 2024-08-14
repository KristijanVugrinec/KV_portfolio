import IconHTML from '../components/icons/html.svg?react'
import IconCSS from '../components/icons/css.svg?react'
import IconGIT from '../components/icons/git.svg?react'
import IconJS from '../components/icons/js.svg?react'
import IconREACT from '../components/icons/react.svg?react'

import style from "./Icons.module.css"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useInView } from "react-intersection-observer"


const languageIcons = [
    {
    title:"HTML",
    description:"HyperText Markup Language",
    Icon: IconHTML,
    href:"/skills"
    },
    {
    title:"CSS",
    description:"Cascading Style Sheets",
    Icon: IconCSS,
    href:"/skills"
    },
    {
    title:"GIT",
    description:"Version Control System",
    Icon: IconGIT,
    href:"/skills"
      },
    {
     title:"JS",
     description:"JavaScript Programming Language",
     Icon: IconJS,
     href:"/skills"
      },
    {
    title:"REACT",
    description:"JavaScript Library for Building UI",
    Icon: IconREACT,
    href:"/skills"
      },
  ]

  
  function Icons () {
        const { ref, inView } =  useInView ({
          threshold : 0,
          triggerOnce: true
        })
      
    const [hoverSkills, setHoverSkills] = useState(null)

return (
 <>
 <div className={style.icons} ref={ref} >
    {languageIcons.map((skill) => {
        const {title, Icon, description,href} = skill;
        return (
            <Link key={title} to={href}>
            <div
            key={title}
            onMouseEnter={() => setHoverSkills(title)}
            onMouseLeave={() => setHoverSkills(null)}
            >
                <Icon className={`${style.icon} ${inView ? style.visible : style.hidden}`} />
                {hoverSkills === title && (
                    <div className={style.tooltip}>
                        <p className={style.description}>{description}</p>  
                        </div>
                )}
            </div>
            </Link>
        )
    }
        )}
 </div>
</>
)
}

export default Icons