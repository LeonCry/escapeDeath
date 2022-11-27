import React from 'react'
import style from './index.module.css'
export default function Start():React.ReactNode {
  return (
    <div className={style.warDiv}>
      <div className={style.warVideo}></div>
        {/* <video className={style.warVideo} autoPlay src="https://assets.mixkit.co/videos/preview/mixkit-three-soldier-silhouettes-posign-with-guns-23157-large.mp4"></video> */}
    </div>
  )
}
