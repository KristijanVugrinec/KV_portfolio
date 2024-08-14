import React from 'react'
import PropTypes from 'prop-types'
import { useInView } from 'react-intersection-observer'
import style from "./Skills.module.css"


const SkillsText = ({text,startIndex,endIndex,highlightStyle = {color:'#44DDC0'}}) => {
  const { ref, inView,  } = useInView({
    threshold: 0,
    triggerOnce:true,
  })
    return <>
    <div ref={ref}>
        <p className={`${style.paragraph} ${inView ? style.visible : style.hidden}`}>
      {text.substring(0, startIndex)}
      <span style={highlightStyle}>
        {text.substring(startIndex, endIndex)}
      </span>
      {text.substring(endIndex)}
    </p>
    </div>
    </>
}


SkillsText.propTypes = {
text: PropTypes.string,
startIndex: PropTypes.number,
endIndex: PropTypes.number,
highlightStyle: PropTypes.object
}

// SkillsText.defaultProps = {
//     highlightStyle: {color: '#44DDC0'}
// }

export default SkillsText