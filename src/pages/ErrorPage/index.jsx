import React from 'react'
import style from './index.module.scss'
export default function ErrorPage() {

  //开始拖拽函数 -- 用于被拖拽元素
  function dragStart(ev){
    const box = 50;
    console.log("start");
    console.log(ev)
    //拖拽元素的宽度格子
    let PXcount = ev.target.offsetWidth/box;
    //拖拽元素的长度格子
    let PYcount = ev.target.offsetHeight/box;
    let PP = [PXcount,PYcount];
    //当前鼠标左侧距离
    let pageX = ev.pageX;
    //当前鼠标右侧距离
    let pageY = ev.pageY;
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
    //拖拽元素左侧定点的位置
    let leftPoint = [pageX - evtaroffsetLeft - FX,pageY - evtaroffsetTop - FY];
    console.log(leftPoint)
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
  }

    //拖拽结束 -- 用于被拖拽元素
  function dragEnd(ev) {
    ev.target.style.opacity = 1;
    ev.target.style.zIndex = 90;
  } 

  //用来处理欲接收元素携带的数据信息 -- 用于接收容器
  function dropHandler(ev){
    const box = 50;
    const maxXcount = 0;
    const maxYcount = 0;
    //阻止默认行为
    ev.preventDefault();
    //获得数据
    let data = ev.dataTransfer.getData("id");
    let loc = ev.dataTransfer.getData("leftTopPoint");
    let PP = ev.dataTransfer.getData("eleCount");
    //拖拽元素所占的格子
    let [PXcount,PYcount] = [Number(PP.split(',')[0]),Number(PP.split(',')[1])];
    //TX,TY表示鼠标在拖拽元素中的位置
    let [TX,TY] = [Number(loc.split(',')[0]),Number(loc.split(',')[1])];
    // console.log([TX,TY])
    //接收元素距离左侧的距离
    let evtaroffsetLeft = ev.target.offsetLeft;
    //接收元素距离上侧的距离
    let evtaroffsetTop = ev.target.offsetTop;
    //当前鼠标左侧距离
    let pageX = ev.pageX;
    //当前鼠标右侧距离
    let pageY = ev.pageY;
    //CX,CY表示鼠标在接收元素中的位置
    let [CX,CY] = [pageX - evtaroffsetLeft,pageY - evtaroffsetTop];
    // RX,RY表示拖拽元素左顶点位于接受元素中的位置
    let [RX,RY] = [CX-TX,CY-TY];

    //当前位置网格约束
    let Xcount = Math.floor(RX/box);
    let Ycount = Math.floor(RY/box);
    // 如果小于0
    Xcount = Xcount < 0?0:Xcount;
    Ycount = Ycount < 0?0:Ycount;
    //如果大于最大值
    //真正位置
    let [RealX,RealY] = [box*Xcount,box*Ycount];
    let ele = document.getElementById(data);
    ele.style.left = RealX + 'px';
    ele.style.top = RealY + 'px';
    ev.target.appendChild(ele);
  }

  // -- 用于接收容器
  function dragOverHandler(ev){
        //阻止默认行为
        ev.preventDefault();
        //设置放置效果
        ev.dataTransfer.dropEffect = "move"
  }


  return (
    <div className={style.body}>
        <div id='p1' className={style.drag} draggable={true} onDragStart={dragStart} onDragEnd={dragEnd}></div>


        <div id='target' onDrop={dropHandler} onDragOver={dragOverHandler} className={style.drop}></div>
    </div>
  )
}
