import React from 'react'
import style from './index.module.scss'
import pubsub from 'pubsub-js'
export default function Thing(props:any) {

    const thisId = props.tid;

    //开始拖拽函数 -- 用于被拖拽元素
    function dragStart(ev:any){
      const box = 59.5;
      console.log("start");
      console.log(ev);
      let absX = getAbsoluteX(ev.target);
      let absY = getAbsoluteY(ev.target);
      console.log("元素绝对位置:",[absX,absY]);
      //拖拽元素的宽度格子
      let PXcount = Math.floor(ev.target.offsetWidth/box);
      //拖拽元素的长度格子
      let PYcount = Math.floor(ev.target.offsetHeight/box);
      let PP = [PXcount,PYcount];
      //当前鼠标左侧距离
      let pageX = ev.pageX;
      //当前鼠标右侧距离
      let pageY = ev.pageY;

      //当前鼠标左侧距离相对
      let mouseRelX = ev.pageX - absX;
      //当前鼠标右侧距离相对
      let mouseRelY = ev.pageY - absY;
      console.log("相对位置鼠标",[mouseRelX,mouseRelY]);
      //拖拽元素距离左侧的距离
      let evtaroffsetLeft = ev.target.parentElement.offsetLeft;
      //拖拽元素距离上侧的距离
      let evtaroffsetTop = ev.target.parentElement.offsetTop;
      //其父元素距离左侧上侧的距离
      let [FX,FY] = [0,0];
      //其父元素
      let parentE = ev.target.parentElement.parentElement;
      if (parentE!==undefined) {
        FX = parentE.offsetLeft;
        FY = parentE.offsetTop;
      }
      //拖拽元素左侧定点的相对位置
      let leftPoint = [FX - evtaroffsetLeft,FY - evtaroffsetTop];
      //当前鼠标位置位于拖拽元素内的相对位置
      let mouseinDrag = [pageX - FX,pageY - FY];
      console.log("拖拽元素的宽度/长度格子",PP);
      console.log("当前鼠标的左侧/上侧距离",[pageX,pageY]);
      console.log("拖拽元素距离左侧/上侧的距离",[evtaroffsetLeft,evtaroffsetTop]);
      console.log("其父元素距离左侧/上侧的距离",[FX,FY]);
      console.log("当前鼠标位置位于拖拽元素内的相对位置",mouseinDrag);
      console.log("= 拖拽元素左上顶点的位置",leftPoint);
      setTimeout(() => {
        ev.target.style.opacity = 0.2;
        ev.target.style.zIndex = 150;
      }, 0);
      //定义拖拽鼠标效果
      ev.dataTransfer.dropEffect = "move";
      //定义传送的数据
      ev.dataTransfer.setData("id", ev.target.id);
      ev.dataTransfer.setData("leftTopPoint", leftPoint);
      ev.dataTransfer.setData("eleCount", PP);
      ev.dataTransfer.setData("mouseRelLocation",[mouseRelX,mouseRelY]);
    }
  
      //拖拽结束 -- 用于被拖拽元素
    function dragEnd(ev:any) {
      //拖拽时的设置的left/top，在这里要剪掉
      let styleLeft = ev.target.style.left==='0px'?0:parseFloat(ev.target.style.left.slice(1));
      let styleTop = ev.target.style.top==='0px'?0:parseFloat(ev.target.style.top.slice(1));

      let styleLeftCount = Math.round(styleLeft/59.5);
      let styleTopCount =  Math.round(styleTop/59.5);
      console.log("style",[styleLeftCount,styleTopCount]);
      const box = 59.5;
      ev.target.style.opacity = 1;
      ev.target.style.zIndex = 90;
      //拖拽元素距离左侧的距离
      let evtaroffsetLeft = ev.target.offsetLeft;
      //拖拽元素距离上侧的距离
      let evtaroffsetTop = ev.target.offsetTop;
      //其父元素距离左侧上侧的距离
      let [FX,FY] = [0,0];
      //其父元素
      let parentE = ev.target.parentElement;
      if (parentE!==undefined) {
        FX = parentE.offsetLeft;
        FY = parentE.offsetTop;
      }
      let leftPoint = [FX - evtaroffsetLeft - styleLeft,FY - evtaroffsetTop - styleTop];
      let point = [Math.ceil(leftPoint[0]/box) - styleLeftCount,Math.ceil(leftPoint[1]/box) - styleTopCount];
      console.log("leftPoint",leftPoint);
      console.log("顶点",point);
    } 
  

//获取元素的x绝对位置
function  getAbsoluteX(element:any):number{
  return element==null?0:element.offsetLeft+getAbsoluteX(element.parentElement)
}

//获取元素的y绝对位置
function  getAbsoluteY(element:any):number{
  return element==null?0:element.offsetTop+getAbsoluteY(element.parentElement)
}


  //显示具体信息
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
    <div id={thisId} className={style.text} onDoubleClick={showInfo} draggable={true} onDragStart={dragStart} onDragEnd={dragEnd} >
        <img src="./picture/things/weapon/AK-47After.png" alt="武器" draggable={false}/>
    </div>
  )
}
