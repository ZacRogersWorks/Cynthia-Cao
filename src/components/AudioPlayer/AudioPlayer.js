import React, { useCallback, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import ProgressBar from './ProgressBar'
import secondsToTime from './secondsToTime'
import MuteOrVolume from './MuteOrVolume'
import PlayOrPause from './PlayOrPause'

function AudioPlayer({ src, title }) {
  const ref = useRef(null);
  const progressBarRef = useRef(null)
  const bufferBarRef = useRef(null)
  const progBarContainerRef = useRef(null)

  // State
  const [duration, setDuration] = useState(null)
  const [isMediaLoaded, setIsMediaLoaded] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  // AUDIO TAG EVENT HANDLERS
  const handleDurationChange = (e) => {
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

  // Seeking
  function seek(time) {
    // Move playhead to correct pos
    ref.current.currentTime = time
  }

  const handleSeekClick = (e) => {
    // Calculate normalized position
    const progBar = progBarContainerRef.current

    let clickPosition = ((e.pageX - progBar.offsetLeft) / progBar.offsetWidth)

    let clickTime = parseFloat(clickPosition * ref.current.duration)

    console.log('clickPosition', clickPosition)
    console.log('clickTime', clickTime)
    console.log('clientX', e.clientX)
    console.log('offsetLeft', progBar.offsetLeft)
    console.log('offsetWidth', progBar.offsetWidth)

    if (ref.current) {
      ref.current.currentTime = clickTime
    }
  }

  // Load song on mount
  useEffect(() => {
    ref.current.src = src
    ref.current.title = title
    ref.current.load()
  }, [src, title])

  /* Manage Play/Pause State */
  const playAudioElement = useCallback(
    function () {
      const audio = ref.current
      audio.play()
        .then(_ => {
          // TODO: update mediaSession
          // navigator.mediaSession.playbackState = 'playing'
          // updateMetadata()
        })
        .catch(console.error)
    }, []
  )

  const pauseAudioElement = () => {
    const audio = ref.current
    if (audio.src && !audio.paused) {
      audio.pause()
      // navigator.mediaSession.playbackState = 'paused'
    }
  }

  const handleToggleMute = () => {
    const audio = ref.current
    audio.muted = !audio.muted
    setIsMuted((prevState) => !prevState)
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
    setCurrentTime(value)
    if (ref.current) {
      ref.current.currentTime = value
    }
  }

  const handleTimeUpdate = () => {
    // This handler is called every 250ms

    // Update State
    let currentTime = ref.current.currentTime
    setCurrentTime(currentTime)

    // Update Progress Bar 
    const percentage = parseFloat((currentTime / duration) * 100)
    if (progressBarRef.current) {
      progressBarRef.current.style.width = `${percentage}%`
    }
  }

  return (
    <>
      <div className="rainbow-circle__container">
        <div className="rainbow-circle"></div>
        <div className="rainbow-circle__inner">
          <div className='player__controls'>
            <div className='player__row'>
              <div className='player__playbtn'>
                <PlayOrPause setIsPlaying={setIsPlaying} playing={isPlaying} />
              </div>
              <div className='player__duration'>
                <span>{secondsToTime(currentTime)}</span>
                <span>{secondsToTime(duration)}</span>
              </div>
            </div>
            <div className='player__row'>
              {/* <ProgressBar onClick={handleSeekClick} progBarContainerRef={progBarContainerRef} bufferBarRef={bufferBarRef} progressBarRef={progressBarRef} /> */}

              <div className="player__progress">
                <input type="range"
                  onChange={handleSliderSeek}
                  onClick={handleSliderSeek}
                  name="progressbar" min="0" value={currentTime} max={duration} />
              </div>


              <div className='player__mutebtn'>
                <MuteOrVolume handleToggleMute={handleToggleMute} muted={isMuted} />
              </div>
            </div>
          </div>
          <audio
            ref={ref}
            onCanPlay={handleCanPlay}
            onLoadStart={handleLoadStart}
            onDurationChange={handleDurationChange}
            onTimeUpdate={handleTimeUpdate}
          >
            <source type="audio/mpeg" />
            <code>audio</code> unsupported.
          </audio>
        </div>
      </div>
    </>
  )
}

AudioPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default AudioPlayer