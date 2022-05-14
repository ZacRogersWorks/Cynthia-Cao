import React from 'react'
import VolumeIcon from './Icons/VolumeIcon'
import PropTypes from 'prop-types'
import MuteIcon from './Icons/MuteIcon'
function MuteOrVolume({muted, handleToggleMute}) {
  return (
    <>
      {muted ? <MuteIcon handleToggleMute={handleToggleMute} size={16} color="black" />
      : <VolumeIcon handleToggleMute={handleToggleMute} size={16} color="black" />}
    </>
  )
}

MuteOrVolume.propTypes = {
  muted: PropTypes.bool.isRequired
}

export default MuteOrVolume