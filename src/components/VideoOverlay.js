import React, { forwardRef } from 'react'

const VideoOverlay = forwardRef(({ playVideo }, ref) => {

    return (
        <div className="video-overlay"
            onClick={playVideo}
            ref={ref}
        >
            <button
            className="video-playBtn"
            onClick={playVideo}
            ></button>
        </div>
    )
})

export default VideoOverlay