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
    //     color: "white",
    //     fontSize: 24,
         position: "fixed",
         top: 50,
         left: 0,
         width: "100%",
         display: "flex",
    //     flexWrap: "wrap",
    //     gap: 34,
         justifyContent: "center",
         alignItems: "center",
    //     padding: 10,
     }}
    ><div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
    <KVLogo />
    </div>
    <div style={{position: "absolute", right: "90px", display: "flex", backgroundColor: "transparent"}}>
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
