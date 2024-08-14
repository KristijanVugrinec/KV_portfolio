import htmlPNG from './certificate/html.png'
import cssPNG from './certificate/css.png'
import gitPNG from './certificate/git.png'
import javascriptPNG from './certificate/javascript.png'
import reactPNG from './certificate/react.png'
import arrowR from './icons/arrowr.svg'
import arrowL from './icons/arrowl.svg'
import { useState,useCallback } from "react"

import style from "./SkillsPicture.module.css"


function SkillsPicture () {
    const gallery = [
        {id:1,url:htmlPNG},
        {id:2,url:cssPNG},
        {id:3,url:gitPNG},
        {id:4,url:javascriptPNG},
        {id:5,url:reactPNG}
    ]
    
        const [currentImage, setCurrentImage] = useState(0);
        const [transition, setTransition] = useState("visible")
    
    
        const nextImage = useCallback (() => {
            setTransition("hidden")
            setTimeout(() => {
            setCurrentImage((prevIndex) => {
                if(prevIndex === gallery.length - 1){
                    return 0
                }
                return prevIndex + 1
            })
            setTransition('visible')},2000)
        }, [gallery.length]);
        
        const prevImage =  useCallback (() => {
            setTransition("hidden")
            setTimeout(() => {
            setCurrentImage((prevIndex) => {
                if(prevIndex === 0){
                    return  gallery.length - 1
                }
                return prevIndex - 1
            })
            setTransition('visible')},2000)
        },[gallery.length]);


        return (
            <>
            <div className={style.main}>
            <div>
            <button className={style.buttonmain} onClick={nextImage}>
            <img src={arrowL} className={style.arrows} />
            </button>
            </div>
            <div className={style.mainImage}>
            <img  key={currentImage}
            src={gallery[currentImage].url} 
            className={`${style.image} ${style[transition]}`} />
            <div className={style.mobilemainbutton}>
            <button  className={style.mobilebutton} onClick={prevImage}>
                <img src={arrowL} className={style.arrows} />
            </button>
            <button  className={style.mobilebutton} onClick={prevImage}>
                <img src={arrowR} className={style.arrows} />
            </button>
            </div>
            </div>
            <div>
            <button  className={style.buttonmain} onClick={prevImage}>
                <img src={arrowR} className={style.arrows} />
            </button>
            </div>
            </div>
            </>
        )

}


export default SkillsPicture