import React from 'react'
import pubsub from 'pubsub-js'
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
    intro:string;
  }
  
  const gameCard:gameCardTP[] = [
    {id:1,name:'仓库',picStr:'picture/warestore.jpg',path:'/wareHouse',intro:'用于储存装备和物品。仓库大小有限，可以扩充但要付出昂贵的代价。'},
    {id:2,name:'小酒馆',picStr:'picture/winkBar.jpg',path:'/winkBar',intro:'用于恢复体力。一杯酒足以让你清醒一整天，赛马和幸运转盘或许也是赚钱的好方法。'},
    {id:3,name:'跳蚤市场',picStr:'picture/swarmp.jpg',path:'/fleaMarket',intro:'用于交换物品和买卖。你想买什么或者你想卖什么？'},
    {id:4,name:'藏身处',picStr:'picture/room.jpg',path:'/refuge',intro:'用于锻炼角色。'},
    {id:5,name:'图鉴',picStr:'picture/picjueg.jpg',path:'/atlas',intro:'用于鉴赏已发现的物品和装备。'},
    {id:6,name:'设置',picStr:'picture/setting.jpg',path:'/setting',intro:'进行游戏设置。'},
  ]

  let [circleClick,setCircle]:[boolean,Function] = React.useState(false);
  let [bg,setbg]:[string,Function] = React.useState('picture/bacdefault.jpg');
  let [classChange,classChangeFn]:[boolean,Function] = React.useState(false);
  //两个定时器，用来取消变黑时间
  let timer1:React.MutableRefObject<NodeJS.Timeout|null> = React.useRef(null);
  let timer2:React.MutableRefObject<NodeJS.Timeout|null> = React.useRef(null);
  let preSrc:React.MutableRefObject<string> = React.useRef('');
  React.useEffect(()=>{
    pubsub.subscribe("changeBG",(_:unknown,src:string)=>{
      if (preSrc.current!==src) {
        preSrc.current = src;
        clearTimeout(timer1.current as NodeJS.Timeout);
        clearTimeout(timer2.current as NodeJS.Timeout);
        classChangeFn(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        timer1.current = setTimeout(() => {
          setbg(src);
        }, 250);
        timer2.current = setTimeout(() => {
          classChangeFn(false);
        }, 500);
      }
    })
  },[preSrc]);

  function enterSelect(circleClick:boolean):void{
    if (!circleClick) {
      setCircle(true);
    }
    else{
      setCircle(false);
    }
  }

  //取消选择，所有选项显示
  function cancle(e:React.MouseEvent):void{
      if (e.currentTarget===e.target) {
        pubsub.publish('otherCardShow',-1);
      }
  }


  return (
    <div className={style.main}>
      <img className={style.bacPic} src={bg} alt="bacPic" data-change={classChange} />
      <div className={style.darker} id='darker' onClick={(e)=>{cancle(e)}}>

      <div className={style.circleMain} data-click={circleClick} onClick={()=>enterSelect(circleClick)}>
        <div>
          <span>暂无活动</span>
        </div>
      </div>
      {
        circleClick?gameCard.map((item)=><Card item={item}  key={item.id}></Card>):null
      }




      </div>

    </div>
  )
}

export default Main;