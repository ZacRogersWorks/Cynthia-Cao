import React, { useEffect, useRef } from 'react'
import YouTube from 'react-youtube'

import VideoOverlay from './VideoOverlay'

const Video = () => {
    const videoPlayerRef = useRef(null)
    const overlayRef = useRef(null)

    const opts = {}

    const playVideo = (e) => {
        overlayRef.current.style.opacity = 0;
        overlayRef.current.style.zIndex= -2;
        videoPlayerRef.current.internalPlayer.playVideo();
    }

    const pauseVideo = () => {
        console.log(overlayRef)
        overlayRef.current.style.opacity = 1;
        overlayRef.current.style.zIndex = 2;
    }

    return (
        <div className="video">
        <div className="video-container">
            <VideoOverlay playVideo={playVideo} ref={overlayRef} />
            <YouTube ref={videoPlayerRef}
            className="video-player"
            videoId={"YpoJic6XeMs"}
            onPause={() => pauseVideo()}
            ></YouTube>
        </div>
        <p className='video-caption'>Howie Mendel Podcast</p>
        </div>
    )
}

export default Video