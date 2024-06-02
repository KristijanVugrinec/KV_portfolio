import IconHTML from '../components/icons/html.svg?react'
import IconCSS from '../components/icons/css.svg?react'
import IconGIT from '../components/icons/git.svg?react'
import IconJS from '../components/icons/js.svg?react'
import IconREACT from '../components/icons/react.svg?react'
import SVGReact from '../components/certificate/react.svg'
import SVGHtml from '../components/certificate/html.svg'
import SVGCSS from '../components/certificate/css.svg'
import SVGJs from '../components/certificate/js.svg'
import SVGGit from '../components/certificate/git.svg'

import style from "./Icons.module.css"
import { useState } from 'react'


const languageIcons = [
    {
    title:"HTML",
    description:"HyperText Markup Language",
    Icon: IconHTML,
    path: SVGHtml
    },
    {
    title:"CSS",
    description:"Cascading Style Sheets",
    Icon: IconCSS,
    path: SVGCSS
    },
    {
    title:"GIT",
    description:"Version Control System",
    Icon: IconGIT,
    path: SVGGit
      },
    {
     title:"JS",
     description:"JavaScript Programming Language",
     Icon: IconJS,
     path: SVGJs
      },
    {
    title:"REACT",
    description:"JavaScript Library for Building UI",
    Icon: IconREACT,
    path: SVGReact,
      },
  ]


function Icons () {

    const [hoverSkills, setHoverSkills] = useState(null)

return (
 <>
 <div className={style.icons}>
    {languageIcons.map((skill) => {
        const {title, Icon, description,path} = skill;
        return (
            <div 
            key={title}
            onMouseEnter={() => setHoverSkills(title)}
            onMouseLeave={() => setHoverSkills(null)}
            >
                <Icon className={style.icon} />
                {hoverSkills === title && (
                    <div className={style.tooltip}>
                        <p>{description}</p>
                        <img 
                                        src={path} 
                                        className={`${style.svgViewer} ${hoverSkills === title ? style.svgViewerActive : ''}`} 
                                        alt={title}
                                    />
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