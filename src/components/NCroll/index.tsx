import React from 'react'
import style from './index.module.scss'
export default function NCroll(props:any) {
    const numbers:number = props.num;
    const numArr = numbers.toString().split('');
  return (
    <div className={style.body}>
        {
            numArr.map((item:string)=>{
                return <span data-number={item} key={Math.random()}>0123456789</span>
            })
        }
    </div>
  )
}
