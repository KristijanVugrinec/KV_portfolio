import { TypeAnimation as Animation } from "react-type-animation";
import style from "./AboutMe.module.css"

const handleClick = () => {
    console.log("Button Clicked")
}


function AboutMe () {
  return <>
  <div className={style.main}>
    <div className={style.pictureandbutton}>
    <div className={style.picture}>
    </div>
    <button className={style.button} onClick={handleClick}>DOWNLOAD CV</button>
  </div>
  <div className={style.allText}>
  <div >
    <p >Hello, my name is Kristijan.</p>
  </div>
  <div className={style.animation}>

  <Animation
      sequence={[
          // Same substring at the start will only be typed out once, initially
          'FRONT',
          1000,
          'END',
          1000,
          'DEVELOPER',
          1000,
          'FRONT-END DEVELOPER' // wait 1s before replacing "Mice" with "Hamsters"
        ]}
        wrapper="span"
        speed={10}
        style={{ fontSize: '2em', color:"#44DDC0",}}
        repeat={0}
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