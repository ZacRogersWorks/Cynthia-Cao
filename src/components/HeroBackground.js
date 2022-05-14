import React, { useRef, useEffect } from 'react'

const HeroBackground = () => {
    const canvasRef = useRef(null)

    return (
        <div className="hero-gradient-container">
            <div className="hero-gradient-color_1"></div>
            <div className="hero-gradient-color_2"></div>
        </div>
    )
}

export default HeroBackground