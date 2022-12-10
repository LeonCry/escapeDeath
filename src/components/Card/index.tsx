import React from 'react'
import  {useNavigate} from 'react-router-dom'
import pubsub from 'pubsub-js'
import style from './index.module.scss'


  const Card:React.FC<any> = (props) => {
  //   interface gameCardTP{
  //   id:number;
  //   name:string;
  //   picStr:string;
  //   path:string;
  // }
    const history = useNavigate();
    const {item} = props;
    // 0在边上显示 1在中间显示 2取消显示
    let [first,setFirst]:[number,Function] = React.useState(-1);

    React.useEffect(()=>{
      pubsub.subscribe('otherCardHidden',(_:unknown,id:number)=>{
        if (item.id!==id) {
          setFirst(2);
        }
      });
      pubsub.subscribe('otherCardShow',(_:unknown,id:number)=>{
        if (item.id!==id) {
          setFirst(0);
        }
      });
    },[item])


    //改变Main组件的背景图片
    function changeBG():void{
        pubsub.publish('changeBG',item.picStr);
    }
    //第一次点击之后的事件
    function clickFirst(firstClick:number):void {
      if (firstClick===0||firstClick===-1) {
        setFirst(1);
        pubsub.publish('otherCardHidden',item.id);
      }
    }

    //按钮点击事件：跳转页面
    function butClick():void{
      history(item.path);
    }


  return (
    <div className={style.card} data-deg={item.id} onMouseEnter={changeBG} onClick = {()=>clickFirst(first)} data-click={first}>
      <img src={item.picStr} alt="pic" />
      <span>{item.name}</span>
      <br />
      <div>{item.intro}</div>
      <button onClick={butClick}>进入{item.name}</button>
    <div className={style.card} data-deg={item.id} onMouseEnter={changeBG} onClick = {()=>clickFirst(first)} data-click={first}>
      <img src={item.picStr} alt="pic" />
      <span>{item.name}</span>
      <br />
      <div>{item.intro}</div>
      <button onClick={butClick}>进入{item.name}</button>
    </div>
  )
}


export default Card;