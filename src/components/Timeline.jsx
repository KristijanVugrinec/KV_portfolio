import { useEffect, useState } from "react"
import style from "./Timeline.module.css"
import learningPicture from "./projects/Learning.png"
import learningFinishedPicture from "./projects/LearningFinished.png"
import { useInView } from "react-intersection-observer"

const Timeline = () => {

    const {ref:firstYearRef,inView:firstYearInView} = useInView({
        threshold: 0,
        triggerOnce:true,
      })

      const {ref:secondYearRef,inView:secondYearInView} = useInView({
        threshold: 0,
        triggerOnce:true,
      })

    return (
        <>
        <div className={style.main}>
            <div className={style.title}>
                <p>JOURNEY</p>
            </div>
            <div className={style.firstYear} ref={firstYearRef}>
                <img src={learningPicture} className={`${style.learning} ${firstYearInView ? style.visible : style.hidden}`}/>
                <div className={style.firstYearText}>
                    <p className={`${style.mainTitleFirstYear} ${firstYearInView ? style.visible : style.hidden}`}>Beginning of My Front-End Development Education</p>
                    <p className={`${style.descriptionFirstYear} ${firstYearInView ? style.visible : style.hidden}`}>In 2023, I started my journey into the world of front-end development at Algebra. This education was not just a step towards professional development but also the realization of my dream to create visually appealing and functional websites. From the very beginning, I was motivated to learn the key technologies such as HTML, CSS, and JavaScript, which form the foundation of modern web design and development.

                    With the support of experienced instructors, I had the opportunity to participate in practical projects that allowed me to apply the knowledge I gained and develop my skills.</p>
                </div>
            </div>
            <div className={style.secondYear} ref={secondYearRef}>
                <div className={style.secondYearText}>
                    <p className={`${style.mainTitleSecondYear} ${secondYearInView ? style.visible : style.hidden}`}>Completion of Education and Skills Acquired</p>
                    <p className={`${style.descriptionSecondYear} ${secondYearInView ? style.visible : style.hidden}`}>
                    After successfully completing the course, I gained a solid understanding of front-end development, including advanced tools and frameworks such as React and Bootstrap. This education taught me not only technical skills but also the importance of teamwork and communication in software development.

                    I am excited about the future challenges and opportunities that will open up for me as a front-end developer, and I can't wait to channel my creativity and knowledge into creating innovative web solutions.
                    </p>
                </div>
                <img src={learningFinishedPicture} className={`${style.finished} ${secondYearInView ? style.visible : style.hidden}`} />
                {/* Text */}
                {/* Slika */}
            </div>
            <div className={style.arrowToSkills}>
                {/* Slika strelice */}
            </div>
        </div>
        </>
    )
}


export default Timeline