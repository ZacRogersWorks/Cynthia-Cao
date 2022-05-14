import React from 'react'
import PropTypes from 'prop-types'

function PauseIcon({ size, color, setIsPlaying }) {
  return (
    <svg onClick={() => setIsPlaying((prevState) => !prevState)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" height={size} width={size} fill={color}>

      <path d="M27.4 35.4V12.6H35.4V35.4ZM12.6 35.4V12.6H20.65V35.4Z" />

    </svg>
  )
}

PauseIcon.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  setIsPlaying: PropTypes.func,
}

export default PauseIcon