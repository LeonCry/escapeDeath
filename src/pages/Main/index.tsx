import React from 'react'
import style from './index.module.scss'
//仓库、酒馆、幸运转盘、藏身处、出发、图鉴（包括背景、身份）、设置
export default function Main() {
  return (
    <div className={style.main}>
      <img className={style.bacPic} src="picture/bacdefault.jpg" alt="bacPic" />
      <div className={style.darker}>

          <div className={style.circleMain}></div>





      </div>

    </div>
  )
}
