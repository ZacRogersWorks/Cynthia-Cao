import React, { useEffect, useRef } from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const PhotoWall = () => {

    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)
    const ref4 = useRef(null)

    const refs = [ref1, ref2, ref3, ref4]

    function offset(el) {
        var rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        // return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
        return { top: rect.top, bottom: rect.bottom }
    }


    function paralaxStuff(e) {
        let index = 0, length = refs.length;
        for (index; index < length; index++) {
            let pos = window.scrollY * refs[index].current.dataset.rate;
            let divOffset = offset(refs[index].current)

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
        <div className="photowall__container">
            <div ref={ref1} className="photowall__1 photowall__photo scroll" data-rate={0.04} data-ratex={-0.08} data-ratey={-0.02}>
                <StaticImage
                    alt="Cynthia Cao at Coachella"
                    src="../images/cynthia-coachella.jpg"
                    width={300}
                    className="photowall__img"
                />
            </div>
            <div ref={ref2} className="photowall__2 photowall__photo scroll" data-rate={0.04} data-ratex={-0.03} data-ratey={-0.04}>
                <StaticImage
                    alt="Cynthia Cao at YouTube Shorts"
                    src="../images/cynthia-cao-youtube-shorts.jpg"
                    width={300}
                    className="photowall__img"
                />
            </div>
            <div ref={ref3} className="photowall__3 photowall__photo scroll" data-rate={0.04} data-ratex={0.09} data-ratey={-0.12}>
                <StaticImage
                    alt="Cynthia Cao at graduation"
                    src="../images/cynthia-cao-graduation.jpg"
                    width={300}
                    className="photowall__img"
                />
            </div>
            <div ref={ref4} className="photowall__4 photowall__photo scroll" data-rate={0.04} data-ratex={0.06} data-ratey={0.075}>
                <StaticImage
                    alt="Cynthia Cao at Huobi Mainnet Happy Hour"
                    src="../images/cynthia-cao-huobi-happy-hour.jpg"
                    width={300}
                    className="photowall__img"
                />
            </div>
        </div>
    )
}

export default PhotoWall