import { Link } from 'react-router-dom'
import KVLogo from '../components/logo/kvlogo.svg?react'
import style from "./Header.module.css"

const headerLinks = [
  {
    title:"HOME",
    href: "/",
  },
  {
    title:"CONTACT ME",
    href: "/contact",
  }
]

function Header() {
return (
  <>
  <header className={style.headerstyle} >
    <div>
    <KVLogo />
    </div>
    <div style={{backgroundColor: "transparent"}}>
    {headerLinks.map((link, index) => {
        const { title, href } = link;
        return (
            <Link
            key={href}
            to={href}
            title={title}
            className={style.linkstyle}
            style={index === 0 ? {marginLeft:0} : {} }
            >
          {title}
        </Link>
      );
    })}
    </div>
  </header>
</>
)
}

export default Header
