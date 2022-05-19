import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import ProgressBar from './ProgressBar'
import secondsToTime from './secondsToTime'
import MuteOrVolume from './MuteOrVolume'
import PlayOrPause from './PlayOrPause'
import { useInView } from 'react-intersection-observer'

import loadscript from 'load-script'

function AudioPlayer({ src, title }) {
  const iframeRef = useRef(null);

  // State
  const [duration, setDuration] = useState(null)
  const [isMediaLoaded, setIsMediaLoaded] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isMediaError, setIsMediaError] = useState(false)
  const [player, setPlayer] = useState(false)
  const [volume, setVolume] = useState(50)



    //Lazy load video embed
  const [container, containerInView] = useInView()

  useEffect(() => {
    // initialize player and store reference in state
    loadscript('https://w.soundcloud.com/player/api.js', () => {

      const player = window.SC.Widget(iframeRef.current)
      setPlayer(player)
      const { PLAY, PAUSE, PLAY_PROGRESS, ERROR, READY } = window.SC.Widget.Events

      player.bind(READY, () => {
        setIsMediaLoaded(true)
        player.getDuration((duration) => {
          setDuration(duration / 1000)
        })
      })

      player.bind(PLAY, () => {
        setIsPlaying(true)
      })

      player.bind(PAUSE, (playerIsPaused) => {
        if (playerIsPaused) {
          setIsPlaying(false)
        }
      })

      player.bind(ERROR, (error) => {
        console.log("ERROR ON SOUNDCLOUD", error)
        setIsMediaError(true)
      })

      player.bind(PLAY_PROGRESS, (playProgress) => {
        setCurrentTime(playProgress.currentPosition / 1000)
      })
    })

  }, [containerInView])

  const handleSliderSeek = (e) => {
    const value = e.target.value
    if (player) {
      player.seekTo(value * 1000)
      player.play()
      setCurrentTime(value)
    }
  }

  const toggleIsPlaying = () => {
    if (player) {
      if (isPlaying) {
        player.pause()
        setIsPlaying(false)
      } else {
        player.play()
        setIsPlaying(true)
      }
    }
  }

  const toggleIsMuted = () => {
    if (player) {
      player.getVolume((currentVolume) => {
        if (currentVolume > 0) {
          setIsMuted(true)
          player.setVolume(0)
        } else {
          setIsMuted(false)
          player.setVolume(100)
        }
      });
    }
  }

  return (
    <div className="rainbow-circle__container" ref={container}>
      <div className="rainbow-circle"></div>
      <div className="rainbow-circle__inner">
        <div className='player__controls'>
          <div className='player__row'>
            <button
              onClick={toggleIsPlaying}
              tabIndex={0}
              className='player__btn'
            >
              <PlayOrPause playing={isPlaying} />
            </button>
            <div className='player__duration'>
              {isMediaError ? 'error' : (
                isMediaLoaded ? (
                  <>
                    <span>{secondsToTime(currentTime)}</span>
                    <span>/</span>
                    <span>{secondsToTime(duration)}</span>
                  </>
                ) : 'loading...'
              )}
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
              onClick={toggleIsMuted}
              tabIndex={0}
              className='player__btn'
            >
              <MuteOrVolume muted={isMuted} />
            </button>
          </div>
        </div>
        {containerInView && <iframe title='player' ref={iframeRef} className="hidden" width="100%" height="130" scrolling="no" frameBorder="no" allow="autoplay" src={src}> 
        </iframe>}
      </div>
    </div>
  )
}

AudioPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default AudioPlayer