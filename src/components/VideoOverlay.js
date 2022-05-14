import React from 'react'

const VideoOverlay = ({playVideo}) => {

    return(
    <div className="video-overlay"
        onClick={playVideo.playVideo}
    >
    </div>
    )
}

export default VideoOverlay