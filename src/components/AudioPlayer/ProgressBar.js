import React from 'react'
import PropTypes from 'prop-types'

function ProgressBar({ onClick, onChange, name, min, value, max }) {
  return (
    <div className="player__progress">
      <input type="range"
        onChange={onChange}
        onClick={onClick}
        name={name} min={min} value={value} max={max} />
    </div>
  )
}

ProgressBar.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number,
  value: PropTypes.number.isRequired,
}

export default ProgressBar