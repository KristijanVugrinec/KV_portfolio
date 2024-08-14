import { TypeAnimation as Animation } from "react-type-animation";
import style from "./AboutMe.module.css"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Picture from "../components/logo/portfolio.png" 
import CV from "./cv/CV.pdf"

const handleClick = () => {
    console.log("Button Clicked")
    const cvurl = CV
    const link = document.createElement("a")
  link.href = cvurl
  link.download = "KristijanV.pdf"
  document.body.appendChild(link)
  link.click();
  document.body.removeChild(link);
  }

const socialMedia = [
  {
    id:1,
    link:"https://github.com/KristijanVugrinec",
    svgElement:FaGithub,
  },
  {
    id:2,
    link:"https://github.com/KristijanVugrinec",
    svgElement:FaLinkedin,
  },
  {
    id:3,
    link:"https://www.facebook.com/kristijan.vugrinec/",
    svgElement:FaFacebook,
  },
  {
    id:4,
    link:"https://www.instagram.com/kristijan.vugrinec/",
    svgElement:FaInstagram,
  },
]

function AboutMe () {
  return <>
  <div className={style.main}>
    <div className={style.pictureandbutton}>
    <div className={style.picture}>
      <img src={Picture} className={style.logoPicture} />
    </div>
    <button className={style.button} onClick={handleClick}>DOWNLOAD CV</button>
    <div className={style.socialmedia}>
      {socialMedia.map((linkovi) => {
        const {link,svgElement:Icon,id} = linkovi;
        return (
          <a key={id} href={link} target="_blank">
            <Icon className={style.glow} />
          </a>
        )
      })}
    </div>
  </div>
  <div className={style.allText}>
  <div >
    <p className={style.name} >Hello! My name is Kristijan,
    </p>
    <p >and I am 24 years old
    </p>
  </div>
  <div className={style.animation}>

  <Animation
      sequence={[
          // Same substring at the start will only be typed out once, initially
          'FRONT-END-DEVELOPER',
          1000,
           // wait 1s before replacing "Mice" with "Hamsters"
        ]}
        wrapper="span"
        speed={10}
        style={{ fontSize: '2em', color:"#44DDC0",}}
        repeat={1}
        />
        </div>
        <div className={style.text}>
            <p>
            I recently completed a front-end development course at Algebra, where I  gained foundational knowledge in HTML, CSS, and JavaScript, as well as  experience with modern frameworks like React 
            </p>
        </div>
        </div>
        </div> 
  </> 
}


export default AboutMe