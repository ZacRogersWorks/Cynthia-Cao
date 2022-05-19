import React, { useEffect, useRef } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer";

import { ANIMATION_VARIANTS } from './ANIMATION_VARIANTS';

const PhotoWall = () => {

    // Animation on scroll
    const controls = useAnimation();
    const [motionRef, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("show")
        }
    }, [controls, inView])


    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)
    const ref4 = useRef(null)
    const ref5 = useRef(null)

    const refs = [ref1, ref2, ref3, ref4, ref5]

    function paralaxStuff(e) {
        let index = 0, length = refs.length;
        for (index; index < length; index++) {
            let pos = window.scrollY * refs[index].current.dataset.rate;

            if (refs[index].current.dataset.direction === 'vertical') {
                refs[index].current.style.transform = `translate3d(0px, ${pos}px, 0px)`;
            } else {
                let posX = window.scrollY * refs[index].current.dataset.ratex;
                let posY = window.scrollY * refs[index].current.dataset.ratey;
                refs[index].current.style.transform = `translate3d(${posX}px, ${posY}px, 0px)`;
            }

        }
    }

    useEffect(() => {
        document.addEventListener('scroll', paralaxStuff)

        return () => {
            document.removeEventListener('scroll', paralaxStuff)
        }
    }, [paralaxStuff])


    return (
        <div>
            <motion.div className="heading-container" variants={ANIMATION_VARIANTS.photowall} ref={motionRef} initial="hidden" animate={controls}>
            <h2 className="header--primary">Photo Wall</h2>
          </motion.div>
            <motion.div className="photowall__container"
                ref={motionRef}
                variants={ANIMATION_VARIANTS.photowall}
                initial="hidden"
                animate={controls}
            >
                <motion.div ref={ref1} className="photowall__1 photowall__photo scroll"
                    data-rate={0.04}
                    data-ratex={-0.08}
                    data-ratey={-0.02}
                    variants={ANIMATION_VARIANTS.photowall}
                >
                    <StaticImage
                        alt="Cynthia Cao at Crypto Bahamas"
                        src="../images/cynthia-cao-at-crypto-bahamas.jpg"
                        width={280}
                        className="photowall__img"
                    />
                </motion.div>
                <motion.div ref={ref2} className="photowall__2 photowall__photo scroll"
                    data-direction="vertical"
                    data-rate={-0.2} data-ratex={-0.06}
                    data-ratey={-0.05}
                    variants={ANIMATION_VARIANTS.photowall}
                >
                    <StaticImage
                        alt="Cynthia Cao at Draper University"
                        src="../images/cynthia-cao-at-draper-university.jpg"
                        width={370}
                        className="photowall__img"
                    />
                </motion.div>
                <motion.div ref={ref3} className="photowall__3 photowall__photo scroll"
                    data-direction="vertical"
                    data-rate={-0.08} data-ratex={0.11}
                    data-ratey={-0.12}
                    variants={ANIMATION_VARIANTS.photowall}
                >
                    <StaticImage
                        alt="Cynthia Cao at Red Light Management"
                        src="../images/cynthia-cao-at-red-light-management.jpg"
                        width={460}
                        className="photowall__img"
                    />
                </motion.div>
                <motion.div ref={ref4} className="photowall__4 photowall__photo scroll"
                    data-rate={0.04}
                    data-ratex={0.06}
                    data-ratey={0.08}
                    variants={ANIMATION_VARIANTS.photowall}
                >
                    <StaticImage
                        alt="Cynthia Cao speaking"
                        src="../images/cynthia-cao-speaking.jpg"
                        width={550}
                        className="photowall__img"
                    />
                </motion.div>
                <motion.div ref={ref5} className="photowall__5 photowall__photo scroll"
                    data-direction="vertical"
                    data-rate={-0.25}
                    data-ratex={0.05}
                    data-ratey={0.05}
                    variants={ANIMATION_VARIANTS.photowall}
                >
                    <StaticImage
                        alt="Cynthia Cao"
                        src="../images/cynthia-cao.jpg"
                        width={220}
                        className="photowall__img"
                    />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default PhotoWall