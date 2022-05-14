import React from 'react'
import PropTypes from 'prop-types'

function PlayIcon({ size, color, setIsPlaying }) {
  return (
    <svg onClick={() => setIsPlaying((prevState) => !prevState)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" height={size} width={size} fill={color}><path d="M17 36.1V11.7L36.15 23.9Z" /></svg>
  )
}

PlayIcon.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  setIsPlaying: PropTypes.func,
}

export default PlayIcon