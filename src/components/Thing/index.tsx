import React from 'react'
import style from './index.module.scss'
import pubsub from 'pubsub-js'
export default function Thing() {
    function showInfo():void {
        pubsub.publish('showInfo',{id:1});
    }

    React.useEffect(()=>{
      document.oncontextmenu = function(e){
        console.log("stop!");
        //点击右键后要执行的代码
        //.......
        return false;//阻止浏览器的默认弹窗行为
      }
    },[])


  return (
    <div className={style.text} onDoubleClick={showInfo} >
        <img src="./picture/things/weapon/AK-47After.png" alt="武器" />
    </div>
  )
}
