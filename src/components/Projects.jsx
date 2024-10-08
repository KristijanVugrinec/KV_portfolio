import style from "./Projects.module.css"
import { useState,useEffect } from "react"
import { useInView } from "react-intersection-observer"
import weatherApp from './projects/WeatherApp.png'
import monitorWeatherApp from './projects/MonitorWeatherApp.png'
import monitorQuizApp from './projects/MonitorMovieQuiz.png'
import blackJackApp from './projects/BlackJack.png'


function Projects () {
    const [text,setText] = useState("")


    useEffect(() => {
        setText("</error>")
    },[])


    const { ref, inView,  } = useInView({
        threshold: 0,
        triggerOnce:true,
      })


      const projects = [
        {   
            index:1,
            image: monitorWeatherApp,
            title: "WEATHER APP",
            link: "https://instantweathernow.netlify.app",
            description: "Simple weather app providing accurate, up-to-date weather for the current day." ,
            language:[
                {
                    first: "Html",
                    second:"JavaScript",
                    third:"React"
                }
            ]
        },
        {
            index:2,
            image: monitorQuizApp,
            link: "https://marvelmaniaquiz.netlify.app/",
            title: "QUIZ APP",
            description: "Challenge your Marvel knowledge with this quiz app. Answer questions about your favorite heroes, villains, and epic moments.",
            language:[
                {
                    first: "Html",
                    second:"JavaScript",
                    third:"React"
                }
            ]
        },
        {   
            index:3,
            image: blackJackApp,
            link: "https://aceof21.netlify.app/",
            title: "BLACKJACK GAME",
            description: "Play the classic Blackjack game. Hit, stand, and try to reach 21 without busting in this sleek, interactive card game." ,
            language:[
                {
                    first: "Html",
                    second:"JavaScript",
                    third:"React"
                }
            ]
        }
      ]

return (
<div className={style.main} ref={ref}>
    <div className={style.projectsText}>
<p className={`${style.title} ${inView ? style.visible : style.hidden}`}>PROJECTS</p>
    </div>
<div className={`${style.box} ${inView ? style.visible : style.hidden} `}>
    {projects.map((project,index) => (
        <>
        <div key={index} className={style.weatherApp}>
            <img src={project.image} className={style.weatherAppPicture} />
            <div className={style.description}>
                <p><a className={style.projectName} href={project.link} target="blank">{project.title}</a></p>
                <p className={style.projectInfo}>{project.description}</p>
                <div className={style.languages}>
                <p className={style.languagesp}>{project.language[0].first}</p>
                <p className={style.languagesp}>{project.language[0].second}</p>
                <p className={style.languagesp}>{project.language[0].third}</p>
                </div>
            </div>
        </div>
        </>
    )
    )}
</div>
</div>
)
}


export default Projects
