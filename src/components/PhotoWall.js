import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const PhotoWall = () => {

    return (
        <div className="row">
            
            <div className="photowall-container">
                <div className="photowall_1">
                    <StaticImage
                        alt="Cynthia Cao at Coachella"
                        src="../images/cynthia-coachella.jpg"
                        width={300}
                    />
                </div>
                <div className="photowall_2">
                    <StaticImage
                        alt="Cynthia Cao at YouTube Shorts"
                        src="../images/cynthia-cao-youtube-shorts.jpg"
                        width={300}
                    />
                </div>
                <div className="photowall_3">
                    <StaticImage
                        alt="Cynthia Cao at graduation"
                        src="../images/cynthia-cao-graduation.jpg"
                        width={300}
                    />
                </div>
                <div className="photowall_4">
                    <StaticImage
                        alt="Cynthia Cao at Huobi Mainnet Happy Hour"
                        src="../images/cynthia-cao-huobi-happy-hour.jpg"
                        width={300}
                    />
                </div>
            </div>
        </div>
    )
}

export default PhotoWall