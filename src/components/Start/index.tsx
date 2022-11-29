import React from 'react'
import style from './index.module.scss'
export default function Start(): React.ReactNode {
  return (
    <div className={style.warDiv}>
      <video className={style.warVideo} autoPlay={true} muted={true} src='../../../video/gun1.mp4'></video>
      <div className={style.title}>
        <span>ESPCAE FROM DEATH</span>
      </div>
      <div className={style.login}>
        <div className={style.head}>
          <img src='../../../head/head.jpg' alt="头像" />
          <br />
          <span>username</span>
          <br />
          <div className={style.startbut}>
            <svg className={style.svg} xmlns="http://www.w3.org/2000/svg" version="1.1">
              <defs>
                <filter id="gooey">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
                  <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0
                  0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="highContrastGraphic" />
                  <feComposite in="SourceGraphic" in2="highContrastGraphic" operator="atop" />
                </filter>
              </defs>
            </svg>
            <button>
              <span className={style.bubbles}>
                <span className={style.bubble}>
                </span><span className={style.bubble}>
                </span><span className={style.bubble}>
                </span><span className={style.bubble}>
                </span><span className={style.bubble}>
                </span><span className={style.bubble}>
                </span><span className={style.bubble}>
                </span><span className={style.bubble}>
                </span><span className={style.bubble}>
                </span><span className={style.bubble}></span>
              </span>
              <span>START</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
