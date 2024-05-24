import IconHTML from '../components/icons/html.svg?react'
import IconCSS from '../components/icons/css.svg?react'
import IconGIT from '../components/icons/git.svg?react'
import IconJS from '../components/icons/js.svg?react'
import IconREACT from '../components/icons/react.svg?react'

import style from "./Icons.module.css"
import { useState } from 'react'


const languageIcons = [
    {
    title:"HTML",
    description:"HyperText Markup Language",
    Icon: IconHTML,
    },
    {
    title:"CSS",
    description:"Cascading Style Sheets",
    Icon: IconCSS,
    },
    {
    title:"GIT",
    description:"Version Control System",
    Icon: IconGIT,
      },
    {
     title:"JS",
     description:"JavaScript Programming Language",
     Icon: IconJS,
      },
    {
    title:"REACT",
    description:"JavaScript Library for Building UI",
    Icon: IconREACT,
      },
  ]


function Icons () {

    const [hoverSkills, setHoverSkills] = useState(null)

return (
 <>
 <div className={style.icons}>
    {languageIcons.map((skill) => {
        const {title, Icon, description} = skill;
        return (
            <div 
            key={title}
            onMouseEnter={() => setHoverSkills(title)}
            onMouseLeave={() => setHoverSkills(null)}
            >
                <Icon className={style.icon} />
                {hoverSkills === title && (
                    <div className={style.tooltip}>
                        {description}
                        </div>
                )}
            </div>
        )
    }
        )}
 </div>
</>
)
}

export default Icons