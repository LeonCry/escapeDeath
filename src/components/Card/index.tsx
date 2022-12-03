import React from 'react'
import style from './index.module.scss'

// interface gameCardTP{
//     id:number;
//     name:string;
//     picStr:string;
//     path:string;
//   }
  
  const Card:React.FC<any> = (props) => {
    const {item} = props;
  return (
    <div className={style.card} data-deg={item.id}>
        <div className={style.inner}>

        </div>
    </div>
  )
}


export default Card;