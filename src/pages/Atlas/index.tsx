import React from 'react'
import style from './index.module.scss'
import NCroll from '../../components/NCroll'
export default function Atlas() {


  let lastClickDivId:string = '';
  let lastClickRight:string = '';
  function leftClick(e:any):void{
    if (lastClickDivId!=='') {
      document.getElementById(lastClickDivId)!.dataset.isclick = 'false';
    }
    lastClickDivId = e.target.id;
    e.target.dataset.isclick = 'true';
  }

  function middleClick(e:any):void{
    let target = e.target;
    if(target.tagName==='LI'){
      return;
    }
    if (target.tagName==='SPAN') {
      target = target.parentElement;
      if (target.dataset.isselect ==='false') {
        target.dataset.isselect = true;
        target.children[0].dataset.isselect = true;
      }
      else{
        target.dataset.isselect = false;
        target.children[0].dataset.isselect = false;
      }
    }

  }

  function rightClick(e:any):void{
    if (lastClickRight!=='') {
      document.getElementById(lastClickRight)!.dataset.isclick = 'false';
    }
    lastClickRight = e.target.id;
    e.target.dataset.isclick = 'true';
  }



  return (
    <div className={style.body}>
    <div className={style.innerbody}></div>
    <div className={style.mains}>
      <h1>图 鉴</h1>
      <div className={style.contains}>
        <div>
          <div id='武器' onClick={(e)=>{leftClick(e)}} data-isclick={false}>武器</div>
          <div id='配件' onClick={(e)=>{leftClick(e)}} data-isclick={false}>配件</div>
          <div id='装备' onClick={(e)=>{leftClick(e)}} data-isclick={false}>装备</div>
          <div id='物品' onClick={(e)=>{leftClick(e)}} data-isclick={false}>物品</div>
          <div id='敌人' onClick={(e)=>{leftClick(e)}} data-isclick={false}>敌人</div>
          <div id='角色' onClick={(e)=>{leftClick(e)}} data-isclick={false}>角色</div>
          <div id='坐骑' onClick={(e)=>{leftClick(e)}} data-isclick={false}>坐骑</div>
          <div id='弹药' onClick={(e)=>{leftClick(e)}} data-isclick={false}>弹药</div>
          <div id='食物' onClick={(e)=>{leftClick(e)}} data-isclick={false}>食物</div>
          <div id='任务' onClick={(e)=>{leftClick(e)}} data-isclick={false}>任务</div>
          <div id='地图' onClick={(e)=>{leftClick(e)}} data-isclick={false}>地图</div>
          <div id='消耗品' onClick={(e)=>{leftClick(e)}} data-isclick={false}>消耗品</div>
          <div id='投掷物' onClick={(e)=>{leftClick(e)}} data-isclick={false}>投掷物</div>
          <div id='资源箱' onClick={(e)=>{leftClick(e)}} data-isclick={false}>资源箱</div>
        </div>

        <div>
          <ul id='突击步枪' onClick={(e)=>{middleClick(e)}} data-isselect={false}>
            <span data-isselect={false}>▼</span>
            <span>突击步枪</span>
            <li id='强袭' onClick={(e)=>{rightClick(e)}} data-isclick={false}>强袭</li>
            <li id='韧劲' onClick={(e)=>{rightClick(e)}} data-isclick={false}>韧劲</li>
            <li id='AK-47' onClick={(e)=>{rightClick(e)}} data-isclick={false}>AK-47</li>
            <li id='M4A1' onClick={(e)=>{rightClick(e)}} data-isclick={false}>M4A1</li>
            <li id='R99' onClick={(e)=>{rightClick(e)}} data-isclick={false}>R99</li>
            <li id='强袭' onClick={(e)=>{rightClick(e)}} data-isclick={false}>强袭</li>
            <li id='韧劲' onClick={(e)=>{rightClick(e)}} data-isclick={false}>韧劲</li>
            <li id='AK-47' onClick={(e)=>{rightClick(e)}} data-isclick={false}>AK-47</li>
            <li id='M4A1' onClick={(e)=>{rightClick(e)}} data-isclick={false}>M4A1</li>
            <li id='R99' onClick={(e)=>{rightClick(e)}} data-isclick={false}>R99</li>
          </ul>

          <ul id='冲锋枪' onClick={(e)=>{middleClick(e)}} data-isselect={false}>
            <span data-isselect={false}>▼</span>
            <span>冲锋枪</span>
            <li id='强袭' onClick={(e)=>{rightClick(e)}} data-isclick={false}>强袭</li>
            <li id='韧劲' onClick={(e)=>{rightClick(e)}} data-isclick={false}>韧劲</li>
            <li id='AK-47' onClick={(e)=>{rightClick(e)}} data-isclick={false}>AK-47</li>
            <li id='M4A1' onClick={(e)=>{rightClick(e)}} data-isclick={false}>M4A1</li>
            <li id='R99' onClick={(e)=>{rightClick(e)}} data-isclick={false}>R99</li>
          </ul>
        </div>

        <div>
            <br />
            <h1>强袭</h1>
            <div>
            <iframe
                  title='xxx'
                  frameBorder={0}
                  // allowFullScreen = {true}
                  // allow="autoplay; fullscreen; xr-spatial-tracking" 
                  // xr-spatial-tracking = {true}
                  // execution-while-out-of-viewport  = {true}
                  // execution-while-not-rendered = {true}
                  // web-share  = {true}
                  src= 'https://sketchfab.com/models/e3caffae38ff43aea3476cea700b6a00/embed?autostart=1'>
                 </iframe>
            </div>
            <div>
              <h2>属性&状态</h2>
              <span>精度 : <NCroll num={10} key={1} /> </span>
                <span>等级 : <NCroll num={6} key={2} /></span>
                <span>损坏 : <NCroll num={10} key={3} />%</span>
                <span>射速 : <NCroll num={750} key={4} /></span>
                <span>基础伤害 : <NCroll num={18} key={5} /></span>
                <span>附加伤害 : <NCroll num={5} key={6} /></span>
                <span>重量 : <NCroll num={8} key={7}/></span>
                <span>技能1 : 啊是大叔大叔大叔多按时大萨达所大1231萨达萨达所大所多</span>
                <span>技能2 : 啊是大叔大叔大叔多按时大萨达所大1231萨达萨达所大所多</span>
            </div>
            <div>
            <h2>故事</h2>
            <pre>
               猫头鹰眼周的羽毛呈辐射状，细羽的排列形成脸盘，面形似猫，因此得名为猫头鹰。它周身羽毛大多为褐色，散缀细斑，稠密而松软，飞行时无声。
               猫头鹰眼周的羽毛呈辐射状，细羽的排列形成脸盘，面形似猫，因此得名为猫头鹰。它周身羽毛大多为褐色，散缀细斑，稠密而松软，飞行时无声。
               猫头鹰眼周的羽毛呈辐射状，细羽的排列形成脸盘，面形似猫，因此得名为猫头鹰。它周身羽毛大多为褐色，散缀细斑，稠密而松软，飞行时无声。
               猫头鹰眼周的羽毛呈辐射状，细羽的排列形成脸盘，面形似猫，因此得名为猫头鹰。它周身羽毛大多为褐色，散缀细斑，稠密而松软，飞行时无声。
               猫头鹰眼周的羽毛呈辐射状，细羽的排列形成脸盘，面形似猫，因此得名为猫头鹰。它周身羽毛大多为褐色，散缀细斑，稠密而松软，飞行时无声。
               猫头鹰眼周的羽毛呈辐射状，细羽的排列形成脸盘，面形似猫，因此得名为猫头鹰。它周身羽毛大多为褐色，散缀细斑，稠密而松软，飞行时无声。
               </pre>
            </div>
        </div>
      </div>
    </div>
    </div>

  )
}
