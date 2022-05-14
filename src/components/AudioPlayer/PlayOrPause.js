import React from 'react'
import PropTypes from 'prop-types'
import PauseIcon from './Icons/PauseIcon'
import PlayIcon from './Icons/PlayIcon'

function PlayOrPause({ playing, setIsPlaying }) {
  return (
    <>
      {playing ? <PauseIcon setIsPlaying={setIsPlaying} size={20} color="black" />
        : <PlayIcon setIsPlaying={setIsPlaying} size={20} color="black" />}
    </>
  )
}

PlayOrPause.propTypes = {
  playing: PropTypes.bool.isRequired
}

export default PlayOrPause