import React, { useEffect, useRef, useState } from 'react'
import YouTube from 'react-youtube'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer";

import { ANIMATION_VARIANTS } from './ANIMATION_VARIANTS';

import VideoOverlay from './VideoOverlay'

const Video = () => {

    //Refs
    const videoPlayerRef = useRef(null)
    const overlayRef = useRef(null)
    const container = useRef(null)
    const videoObserver = useRef(null);
    const controls = useAnimation();

    // Animation on scroll
    const [motionRef, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("show")
        }
    }, [controls, inView])


    //Lazy load video embed
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


    // Show/hide overlay
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
        <motion.div className="video"
            variants={ANIMATION_VARIANTS.photowall}
            initial="hidden"
            animate={controls}
            ref={motionRef}
        >
            <motion.div className="heading-container" variants={ANIMATION_VARIANTS.photowall}>
                <h2 className="header--primary mt-1">Speaking</h2>
            </motion.div>
            <motion.div className="video-container" ref={container} variants={ANIMATION_VARIANTS.photowall}>
                {showVideo && <VideoOverlay playVideo={playVideo} ref={overlayRef} />}
                {showVideo && <YouTube ref={videoPlayerRef}
                    className="video-player"
                    videoId={"YpoJic6XeMs"}
                    onPause={() => pauseVideo()}
                />
                }
            </motion.div>
            <motion.p className='video-caption' variants={ANIMATION_VARIANTS.photowall}>Howie Mendel Podcast</motion.p>
        </motion.div>
    )
}

export default Video