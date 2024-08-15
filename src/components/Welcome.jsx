import { useEffect, useState } from "react"
import { TypeAnimation as Animation } from "react-type-animation";
import style from "./Welcome.module.css"



function Welcome () {

    const [hideDiv,setHideDiv] = useState(() => {
        const storedValue = sessionStorage.getItem('hideDiv');
        return storedValue === 'true'
    })

        const deleteDiv = () => {
            setHideDiv(true)
        }


        useEffect(() => {
            sessionStorage.setItem('hideDiv', hideDiv);
        },[hideDiv])


        useEffect(() => {
            console.log('Class name:', style.scroll);
            if(!hideDiv){
                document.body.classList.add(style.scroll)
            } else {
                document.body.classList.remove(style.scroll)
            }

            return () => {document.body.classList.remove(style.scroll);};
        },[hideDiv]);

            if(hideDiv) {
                return null
            }

        

    return (
    <div className={style.mainDiv}>
        <div>
        <h1>WELCOME TO MY CREATIVE SPACE!</h1>
        </div>
        <div>
        You've just entered a realm where innovation meets execution. Here, you'll explore a portfolio shaped by dedication, creativity, and a touch of digital craftsmanship. As you navigate through my work, you'll see the results of meticulous effort and a passion for problem-solving. Feel free to delve into the projects and discover the creative solutions I've crafted. Enjoy the journey!
        </div>
        <div>
            <button className={style.buttonmain} onClick={deleteDiv}>CONTINUE!</button>
        </div>
    </div>
)

    }


export default Welcome