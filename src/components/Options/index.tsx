import React from 'react'
import pubsub from 'pubsub-js'
import style from './index.module.scss'
export default function Options() {

    let [isShow,setShow]:[boolean,Function] = React.useState(false);
    let [thisThings,setThings]:[object|null,Function] = React.useState(null);
    let bodyRef = React.createRef<HTMLDivElement>();
    React.useEffect(()=>{
        pubsub.subscribe('showRight', (_: unknown, item: any) => {
            setShow(false);
            let {mouseEvent,things} = item;
            setThings(things);
            console.log("mouseEvent",mouseEvent);
            document.getElementById('options')!.style.left = mouseEvent.clientX + 'px';
            document.getElementById('options')!.style.top = mouseEvent.clientY + 'px';
            setShow(true);
          })
    },[])

    //取消显示
    function setshows(){
        setShow(false);
    }

    //打开
    function openFn(){
        pubsub.publish('showInfo',{things:thisThings});
        setshows();
    }

    //装备
    function equitment(){


        setshows();
    }

    //丢弃
    function abadon(){


        setshows();
    }

    //旋转
    function trans(){
        pubsub.publish('transf',thisThings);
        setshows();
    }




    document.onclick = function(){
        setshows();
    }




  return (
    <div id='options' className={style.body} data-isshow={isShow}>
        <button onClick={openFn}>打开</button>
        <button onClick={equitment}>装备/卸下</button>
        <button onClick={equitment}>跳蚤市场</button>
        <button onClick={trans}>旋转 90°</button>
        <button className={style.reverse} onClick={abadon}>丢弃</button>
    </div>
  )
}
