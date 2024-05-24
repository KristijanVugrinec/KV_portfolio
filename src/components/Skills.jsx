import PropTypes from 'prop-types'


const SkillsText = ({text,startIndex,endIndex,highlightStyle}) => {
    return <>
        <p style={{ fontSize: '10em', letterSpacing: '0.6em',fontWeight:'bold' }}>
      {text.substring(0, startIndex)}
      <span style={highlightStyle}>
        {text.substring(startIndex, endIndex)}
      </span>
      {text.substring(endIndex)}
    </p>
    </>
}


SkillsText.propTypes = {
text: PropTypes.string,
startIndex: PropTypes.number,
endIndex: PropTypes.number,
highlightStyle: PropTypes.object
}

SkillsText.defaultProps = {
    highlightStyle: {color: '#44DDC0'}
}

export default SkillsText