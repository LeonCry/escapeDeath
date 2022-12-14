import React from 'react'
import NCroll from '../../components/NCroll'
import style from './index.module.scss'
export default function Maps() {
  let [a,b]:[number,Function] = React.useState(12);
  function clicks() {
    b(a+1);
  }
  return (
    <div className={style.body} onClick={clicks}>
        <NCroll num={15}/>
    </div>
  )
}
