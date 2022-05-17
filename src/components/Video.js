import React, { useEffect, useRef, useState } from 'react'
import YouTube from 'react-youtube'

import VideoOverlay from './VideoOverlay'

const Video = () => {
    const videoPlayerRef = useRef(null)
    const overlayRef = useRef(null)
    const container = useRef(null)
    const videoObserver = useRef(null);

    const [showVideo, setShowVideo] = useState(false);

    function onVideoIntersection(entries) {
        if (!entries || entries.length <= 0) return

        if (entries[0].isIntersecting) {
            setShowVideo(true);
            videoObserver.current.disconnect();
        }
    }

    useEffect(() => {
        videoObserver.current = new IntersectionObserver(onVideoIntersection, {
            rootMargin: '100px 0px',
            threshold: .25
        })
    }, [])

    useEffect(() => {
        if (window && 'IntersectionObserver' in window) {
            if (container && container.current) {
                videoObserver.current.observe(container.current)
            }
        } else {
            setShowVideo(true)
        }
    }, [container])


    const playVideo = (e) => {
        overlayRef.current.style.opacity = 0;
        overlayRef.current.style.zIndex = -2;
        videoPlayerRef.current.internalPlayer.playVideo();
    }

    const pauseVideo = () => {
        console.log(overlayRef)
        overlayRef.current.style.opacity = 1;
        overlayRef.current.style.zIndex = 2;
    }

    return (
        <div className="video">
            <div className="video-container" ref={container}>
                <VideoOverlay playVideo={playVideo} ref={overlayRef} />
                {setShowVideo && <YouTube ref={videoPlayerRef}
                    className="video-player"
                    videoId={"YpoJic6XeMs"}
                    onPause={() => pauseVideo()}
                />
                }
            </div>
            <p className='video-caption'>Howie Mendel Podcast</p>
        </div>
    )
}

export default Video