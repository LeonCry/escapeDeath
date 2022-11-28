import React from 'react'
import style from './index.module.scss'
export default function Start():React.ReactNode {
  return (
    <div className={style.warDiv}>
        <video className={style.warVideo} autoPlay={true}  muted={true} src='../../../video/gun1.mp4'></video>
        <div className={style.title}>
          <span>ESPCAE FROM DEATH</span>
        </div>
        <div className={style.login}>
            <div className={style.head}>
              <img src='../../../head/head.jpg' alt="头像"/>
              <br />
              <span>username HAS CONNECTED</span>
              <br />
              <button className={style.startbut}>START</button>
            </div>
        </div>
    </div>
  )
}
