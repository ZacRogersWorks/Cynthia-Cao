import React from 'react'
import VolumeIcon from './Icons/VolumeIcon'
import PropTypes from 'prop-types'
import MuteIcon from './Icons/MuteIcon'
function MuteOrVolume({muted}) {
  return (
    <>
      {muted ? <MuteIcon size={13} color="black" />
      : <VolumeIcon size={13} color="black" />}
    </>
  )
}

MuteOrVolume.propTypes = {
  muted: PropTypes.bool.isRequired
}

export default MuteOrVolume