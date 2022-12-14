import React from 'react'
import style from './index.module.scss'
import pubsub from 'pubsub-js'
export default function Thing() {
    function showInfo():void {
        pubsub.publish('showInfo',{id:1});
    }
  return (
    <div className={style.text} onClick={showInfo}>
        <img src="./picture/things/weapon/AK-47After.png" alt="武器" />
    </div>
  )
}
