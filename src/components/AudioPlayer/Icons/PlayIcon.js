import React from 'react'
import PropTypes from 'prop-types'

function PlayIcon({ size, color }) {
  return (
    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 36" height={size} width={size} fill={color}><path d="M17 36.1V11.7L36.15 23.9Z" /></svg>
  )
}

PlayIcon.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
}

export default PlayIcon