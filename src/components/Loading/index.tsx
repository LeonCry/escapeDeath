import React from 'react'
import style from './index.module.scss'
export default function Loading() {
  return (
    <div className={style.loading}>
        <div className={`${style.outerL} ${style.common}`}></div>
        <div className={`${style.outerV} ${style.common}`}></div>
        <div className={style.innerR}></div>
        <div className={style.innerB}></div>
        <div className={style.text}><span> 加 载 中 . . .</span></div>
    </div>
  )
}
