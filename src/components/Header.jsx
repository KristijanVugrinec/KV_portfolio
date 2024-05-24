import { Link } from 'react-router-dom'
import KVLogo from '../components/logo/kvlogo.svg?react'

const headerLinks = [
  {
    title:"about",
    href: "/",
  },
  {
    title:"contacts",
    href: "/aboutme",
  }
]

function Header() {
return (
  <>
  <header
     style={{
        marginLeft:"2rem",
       color: "white",
        fontSize: 24,
         position: "relative",
         width: "100%",
         display: "flex",
        flexWrap: "wrap",
        gap: 34,
         justifyContent: "center",
         alignItems: "center",
        padding: 10,
     }}
    ><div>
    <KVLogo />
    </div>
    <div style={{backgroundColor: "transparent"}}>
    {headerLinks.map((link) => {
        const { title, href } = link;
        return (
            <Link
            key={href}
            to={href}
            title={title}
            style={{
                backgroundColor: "transparent",
                marginLeft: 50,
                fontWeight: "normal",
                fontSize: 24,
            }}
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
