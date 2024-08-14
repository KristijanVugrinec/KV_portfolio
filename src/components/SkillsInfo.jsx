import Header from "./Header.jsx"
import SkillsPicture from "./SkillsPicture.jsx"

import style from "./SkillsInfo.module.css"
import Footer from "./Footer.jsx"

function SkillsInfo () {
    return (
        <>
        <div className={style.main}>
        <Header/>
        <div>
        <h2>
        Certifications & Learning Journey
        </h2>
        </div>
        <div>
        <p>
        As part of my ongoing dedication to learning and self-improvement, I have completed several courses that have provided me with valuable skills and knowledge. The certifications below are proof of my commitment to expanding my expertise and staying informed about the latest practices in my field. Each of these certifications reflects the knowledge I've gained and the progress I've made in my educational journey.
        </p>
        </div>
        <div>
        <h3>
        My Certifications
        </h3>
        <p>
        Certifications that validate my skills, expertise, and ongoing commitment to professional development.
        </p>
        </div>
        <SkillsPicture />
        <Footer />
        </div>
        </>
    )
}


export default SkillsInfo