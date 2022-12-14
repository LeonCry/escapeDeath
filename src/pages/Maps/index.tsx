import React from 'react'
import NCroll from '../../components/NCroll'
import style from './index.module.scss'
export default function Maps() {
  let [a,b]:[number,Function] = React.useState(12);
  function minbox(i:any,j:any,width:any,height:any,bg:any) {
    var minbox = document.createElement("div")
    minbox.style.width = '20px'       //消失碎片初始大小为直径20px的圆形
    minbox.style.height = '20px'
    minbox.style.borderRadius = '50%'
    minbox.style.position = 'absolute'
    minbox.style.top = i + 'px'
    minbox.style.left = j + 'px'
    minbox.style.background = bg      //碎片背景对应图片背景
    minbox.style.backgroundSize = width + ' ' + height
    minbox.style.backgroundPosition = -j + 'px ' + -i + 'px'
    minbox.style.overflow = 'hidden;'
    minbox.style.transform = 'scale(' + Math.random()*3  + ')'   //随机缩放
    minbox.style.opacity = ((Math.random()*10)/10).toString();        //随机透明度

    ((document.getElementById('bg')) as HTMLElement).appendChild(minbox);

    //生成随机运动方向
    var h = Math.random()*10 - 5;
    var l = Math.random()*10 - 5;
    var timer = setInterval(function() {
        minbox.style.left = parseInt(minbox.style.left) + l + 'px';
        minbox.style.top = parseInt(minbox.style.top) + h + 'px';
        minbox.style.opacity = ((minbox.style.opacity as any) - 0.05).toString();      //每移动一次，透明度降低0.05
        if((minbox.style.opacity as any) <= 0) {                        //完全透明后，碎片被清除
            clearInterval(timer);
            (minbox.parentNode as ParentNode).removeChild(minbox)
        }
    },30)
}

  function clicks(e:any) {
    var bg = document.getElementById('bg') !;
    var img = e.target;           //获取被点击元素
        let left = (img as HTMLElement).offsetLeft     //获取元素位置
        let top = (img as HTMLElement).offsetTop
        let height = getComputedStyle((img as HTMLElement)).height   //获取元素大小
        let width = getComputedStyle((img as HTMLElement)).width
        var background = getComputedStyle((img as HTMLElement)).background    //获取元素背景
        let h = top + parseInt(height)
        let w = left + parseInt(width);
        (img as HTMLElement).style.opacity = '0'
        for(let i = top; i < h; i = i + 20) {
            for(let j = left; j < w; j = j + 20) {
                minbox(i,j,width,height,background)
            }
        }
        setTimeout(function() {
            bg.removeChild((img as HTMLElement))
        },6000)
  }

  return (
    <div className={style.body} onClick={(e)=>clicks(e)}>
        <div id='bg' className={style.bg}>
          <div></div>
        </div>
    </div>
  )
}
