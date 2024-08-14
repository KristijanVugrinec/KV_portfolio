import { Link } from "react-router-dom";
import style from "./Footer.module.css"


const socialLinks = [
    {
        id:1,
        name:"GitHub",
        href:"https://github.com/KristijanVugrinec"
    },
    {
        id:2,
        name:"Facebook",
        href:"https://www.facebook.com/kristijan.vugrinec/"
    },
    {
        id:3,
        name:"LinkedIn"
    },
    {
        id:4,
        name:"Instagram",
        href:"https://www.instagram.com/kristijan.vugrinec/"
    }
]

const footerLinks = [
    {
        id:1,
      title:"Home",
      href: "/",
    },
    {
        id:2,
      title:"Contact me",
      href: "/contact",
    }
  ]


function Footer () {
    return (
        <footer>
    <div>
      <p>2024 Kristijan Vugrinec. All rights reserved ©</p>
    </div>
    <div className={style.links}>
        {footerLinks.map((links) => {
            const {id,title,href} = links;
            return (
                <ul key={id}>
                    <Link to={href}
                    >{title}</Link>
                </ul>
            )
        })}
    </div>
    <div className={style.socials}>
      <p className={style.socialsTag}>Socials:</p>
      {socialLinks.map((links) => {
        const {id,name,href} = links;
        return (
            <ul key={id} className={style.list}>
                <a href={href} target="_blank">
                <li>{name}</li>
                </a>
            </ul>
        );
      })}
    </div>
    <div className={style.contacts}>
      <p>CONTACT</p>
      <p>Email:kristijan.vugrinec2@gmail.com</p>
      <p>Phone number: +385 91 767 0395</p>
    </div>
  </footer>
    )
}

export default Footer;