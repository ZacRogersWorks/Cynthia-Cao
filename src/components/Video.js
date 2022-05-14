import React, { useState } from 'react'
import YouTube from 'react-youtube'

import VideoOverlay from './VideoOverlay'

const Video = () => {
    const [clickPlay, setClickPlay] = useState(false)

    const opts = {

    }
    const playVideo = (e) => {
        e.target.styles.opacity = 0;
    }

    return (
        <div className="video-container">
            <VideoOverlay playVideo={playVideo} />
            <YouTube 
            className="video-player"
            videoId={"YpoJic6XeMs"}
            />
            <p>Howie Mendel Podcast</p>
        </div>
    )
}

export default Video