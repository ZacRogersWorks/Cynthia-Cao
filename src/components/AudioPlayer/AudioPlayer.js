import React, { useCallback, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import ProgressBar from './ProgressBar'
import secondsToTime from './secondsToTime'
import MuteOrVolume from './MuteOrVolume'
import PlayOrPause from './PlayOrPause'

function AudioPlayer({ src, title }) {
  const ref = useRef(null);

  // State
  const [duration, setDuration] = useState(null)
  const [isMediaLoaded, setIsMediaLoaded] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  // AUDIO TAG EVENT HANDLERS
  const handleDurationChange = () => {
    if (ref.current) {
      setDuration(ref.current.duration)
    }
  }

  // Data Loading Handlers
  const handleCanPlay = () => {
    setIsMediaLoaded(true)
  }

  const handleLoadStart = () => {
    setIsMediaLoaded(false)
  }

  // Load song on mount
  useEffect(() => {
    const audio = ref.current
    if (audio) {
      audio.src = src
      audio.title = title
      audio.load()
    }
  }, [src, title])

  /* Manage Play/Pause State */
  const playAudioElement = useCallback(
    function () {
      const audio = ref.current
      audio.play()
        .then(_ => {
        })
        .catch(console.error)
    }, []
  )

  const pauseAudioElement = () => {
    const audio = ref.current
    if (audio.src && !audio.paused) {
      audio.pause()
    }
  }

  useEffect(() => {
    if (isMediaLoaded) {
      if (isPlaying) {
        playAudioElement()
      } else {
        pauseAudioElement()
      }
    }

  }, [isPlaying, isMediaLoaded, playAudioElement])


  const handleSliderSeek = (e) => {
    const value = e.target.value
    const audio = ref.current

    if (audio) {
      audio.currentTime = value
      setCurrentTime(value)
    }
  }

  const handleTimeUpdate = () => {
    // This handler is called every 250ms
    let currentTime = ref.current.currentTime
    setCurrentTime(currentTime)
  }

  const toggleIsPlaying = () => setIsPlaying((prevState) => !prevState)
  const toggleIsMuted = () => {
    const audio = ref.current
    if (audio) {
      audio.muted = !audio.muted
      setIsMuted((prevState) => !prevState)
    }
  }


  const handleKeyBoard = (e, action) => {
    if (e.code === 'Space') {
      if (action === 'play') {
        toggleIsPlaying()
      } else if (action === 'mute') {
        toggleIsMuted()
      }
    }
  }

  return (
    <div className="rainbow-circle__container">
      <div className="rainbow-circle"></div>
      <div className="rainbow-circle__inner">
        <div className='player__controls'>
          <div className='player__row'>
            <button
              onKeyDown={(e) => handleKeyBoard(e, 'play')}
              onClick={toggleIsPlaying}
              tabIndex={0}
              className='player__btn'
            >
              <PlayOrPause playing={isPlaying} />
            </button>
            <div className='player__duration'>
              <span>{secondsToTime(currentTime)}</span>
              <span>/</span>
              <span>{secondsToTime(duration)}</span>
            </div>
          </div>
          <div className='player__row'>
            <ProgressBar
              onChange={handleSliderSeek}
              onClick={handleSliderSeek}
              name="progressbar"
              min={0}
              value={parseInt(currentTime, 10)}
              max={duration || 0}
            />
            <button
              onKeyDown={(e) => handleKeyBoard(e, 'mute')}
              onClick={toggleIsMuted}
              tabIndex={0}
              className='player__btn'
            >
              <MuteOrVolume muted={isMuted} />
            </button>
          </div>
        </div>
        <audio
          ref={ref}
          preload="metadata"
          onCanPlay={handleCanPlay}
          onLoadStart={handleLoadStart}
          onDurationChange={handleDurationChange}
          onTimeUpdate={handleTimeUpdate}
        >
          <code>audio</code> unsupported.
        </audio>
      </div>
    </div>
  )
}

AudioPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default AudioPlayer