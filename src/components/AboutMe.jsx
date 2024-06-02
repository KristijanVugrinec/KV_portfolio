import { TypeAnimation as Animation } from "react-type-animation";
import style from "./AboutMe.module.css"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const handleClick = () => {
    console.log("Button Clicked")
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
    </div>
    <button className={style.button} onClick={handleClick}>DOWNLOAD CV</button>
    <div className={style.socialmedia}>
      {socialMedia.map((linkovi) => {
        const {link,svgElement:Icon,id} = linkovi;
        return (
          <a key={id} href={link}>
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