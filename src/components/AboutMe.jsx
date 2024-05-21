import { TypeAnimation as Animation } from "react-type-animation";
import style from "./AboutMe.module.css"

const handleClick = () => {
    console.log("Button Clicked")
}


function AboutMe () {
  return <>
  <div className={style.main}>
    <div>
    <div className={style.picture}>
    </div>
    <div style={{
      marginTop:60,
    }}>
    <button className={style.button} onClick={handleClick} style={{
    //   width:220,
    //   height:61,
    //   borderRadius:30,
    //   color:"black",
    //   backgroundColor:"#44DDC0"
    }}>DOWNLOAD CV</button>
    </div>
  </div>
  <div>
    <p style={{
      fontFamily:"Inter",fontWeight:"lighter",fontSize:"20px"
    }}>Hello, my name is Kristijan.</p>
  </div>
  <div>

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
        style={{ fontSize: '2em', display:"flex", color:"#44DDC0", position:"absolute", transform:"translateX(-50%)"}}
        repeat={0}
        />
        </div>
        </div> 
  </> 
}


export default AboutMe