import React from 'react'

function ProgressBar({ onClick, progBarContainerRef, progressBarRef, bufferBarRef }) {
  return (
    <>
      <div
        onClick={onClick}
        role="progressbar"
        tabIndex={0}
        ref={progBarContainerRef}
        className="player__progress"
      >
        <div ref={progressBarRef} className="player__bar"></div>
      </div>
    </>
  )
}

export default ProgressBar