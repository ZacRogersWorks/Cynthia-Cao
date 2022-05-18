import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer";

import { PRESS_LINKS } from './PRESS_LINKS'
import { ANIMATION_VARIANTS } from './ANIMATION_VARIANTS';


const Press = () => {

    // Heading animation on scroll
    const headingControls = useAnimation();
    const [headingMotionRef, headingInView] = useInView();
    useEffect(() => {
        if (headingInView) {
            headingControls.start("show")
        }
    }, [headingControls, headingInView])

    // Links animation on scroll
    const linksControls = useAnimation();
    const [linksMotionRef, linksInView] = useInView();
    useEffect(() => {
        if (linksInView) {
            linksControls.start("show")
        }
    }, [linksControls, linksInView])


    return (
        <div>
            <motion.div className="heading-container"
            variants={ANIMATION_VARIANTS.pressHeading}
            initial="hidden"
            animate={headingControls}
            ref={headingMotionRef}
            >
                <h2 className="header--primary">Press</h2>
            </motion.div>
            <motion.ul className="press-links"
                variants={ANIMATION_VARIANTS.pressList}
                initial="hidden"
                animate={linksControls}
                ref={linksMotionRef}
            >
                {PRESS_LINKS.map(article => {
                    return (
                        <motion.li key={article.id}
                            variants={ANIMATION_VARIANTS.pressLinks}
                            
                        >
                            <a className="color-text" href={`${article.link}`}>{article.title}</a>
                        </motion.li>
                    )
                })}
            </motion.ul>
        </div>
    )
}

export default Press