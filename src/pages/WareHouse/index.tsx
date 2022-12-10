import React from 'react'
import style from './index.module.scss'
export default function WareHouse() {
  return (
    <div className={style.body}>
      <div className={style.title}>WareHouse //仓库</div>
      <div className={style.main}>
        <div className={style.left}></div>
        <div className={style.right}></div>
      </div>
    </div>
  )
}
