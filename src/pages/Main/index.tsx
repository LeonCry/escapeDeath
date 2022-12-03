import React from 'react'
import style from './index.module.scss'
import Card from '../../components/Card'
//仓库、酒馆、幸运转盘、藏身处、出发、图鉴（包括背景、身份）、设置
const Main:React.FC = () => {

  //type
  interface gameCardTP{
    id:number;
    name:string;
    picStr:string;
    path:string;
  }
  
  const gameCard:gameCardTP[] = [
    {id:1,name:'仓库',picStr:'null',path:'null'},
    {id:2,name:'酒馆',picStr:'null',path:'null'},
    {id:3,name:'幸运转盘',picStr:'null',path:'null'},
    {id:4,name:'藏身处',picStr:'null',path:'null'},
    {id:5,name:'图鉴',picStr:'null',path:'null'},
    {id:6,name:'设置',picStr:'null',path:'null'},
  ]

  let [circleClick,setCircle]:[boolean,Function] = React.useState(false);

  function enterSelect(circleClick:boolean):void{
    if (!circleClick) {
      setCircle(true);
    }
    else{
      setCircle(false);
      console.log("进入游戏...");
    }
  }

  return (
    <div className={style.main}>
      <img className={style.bacPic} src="picture/bacdefault.jpg" alt="bacPic" />
      <div className={style.darker}>

      <div className={style.circleMain} data-click={circleClick} onClick={()=>enterSelect(circleClick)}></div>
      {
        circleClick?gameCard.map((item)=><Card item={item}  key={item.id}></Card>):null
      }




      </div>

    </div>
  )
}

export default Main;