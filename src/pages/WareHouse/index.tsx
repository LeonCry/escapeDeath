import React from 'react'
import pubsub from 'pubsub-js'
import Thing from '../../components/Thing';
import ThreeD from '../../components/ThreeD';
import style from './index.module.scss'
import NCroll from '../../components/NCroll';

export default function WareHouse() {

  //仓库总大小
  let [boxSize,setBoxSizeFn]:[Array<number>,Function] = React.useState(new Array(720).fill(0));
  //仓库已有大小
  let [hasboxSize,setHasBoxSizeFn]:[number,Function] = React.useState(360);
  //口袋总大小
  let [wallt,setWallt]:[Array<number>,Function] = React.useState(new Array(32).fill(0));
  //口袋已有大小
  let [hasWallt,setHasWallt]:[number,Function] = React.useState(16);
  //保险箱总大小
  let [insurance,setInsurance]:[Array<number>,Function] = React.useState(new Array(16).fill(0));
  //保险箱已有大小
  let [hasInsurance,setHasInsurance]:[number,Function] = React.useState(8);
  //展示物品细节的个数
  let [hasInfoDiv,setHasInfoDiv]:[Array<number>,Function] = React.useState([]);
  //用来存储showinfo对象的id对应hasInfoDiv数组的索引
  let saveIndexMap = new Map();

  React.useEffect(()=>{
    pubsub.subscribe('showInfo',(_:unknown,item:any)=>{
      //如果找不到这个物品，则添加
      if (!saveIndexMap.get(item.id)) {
        saveIndexMap.set(item.id,hasInfoDiv.length);
        setHasInfoDiv([...hasInfoDiv,item]);
      }
    })
    pubsub.subscribe('decreseInfo',(_:unknown,item:any)=>{
      let removeIndex = saveIndexMap.get(item.id);
      console.log(saveIndexMap)
      console.log(removeIndex);
      let newInfo = hasInfoDiv.slice(0,removeIndex-1).concat(hasInfoDiv.slice(removeIndex));
      console.log(newInfo);
      setHasInfoDiv(newInfo);
    })

  },[]);


  // 拖拽相关
  //用来处理欲接收元素携带的数据信息 -- 用于接收容器
  function dropHandler(ev:any){
    const box = 59.5;
    const maxXcount = 12;
    const maxYcount = 30;
    //阻止默认行为
    ev.preventDefault();
    //获得数据
    let data = ev.dataTransfer.getData("id");
    let loc = ev.dataTransfer.getData("leftTopPoint");
    let PP = ev.dataTransfer.getData("eleCount");
    let mouseRelLocation = ev.dataTransfer.getData("mouseRelLocation");
    //拖拽元素所占的格子
    let [PXcount,PYcount] = [Number(PP.split(',')[0]),Number(PP.split(',')[1])];
    //TX,TY表示鼠标在拖拽元素中的位置
    let [TX,TY] = [Number(loc.split(',')[0]),Number(loc.split(',')[1])];
    //MX,MY鼠标相对位置
    let [MX,MY] = [Number(mouseRelLocation.split(',')[0]),Number(mouseRelLocation.split(',')[1])];
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
    // RX,RY表示拖拽元素左顶点位于接收元素中的位置
    let [RX,RY] = [CX-TX,CY-TY];

    //当前位置网格约束
    let Xcount = Math.floor(RX/box);
    let Ycount = Math.floor(RY/box);
    // 如果小于0 或者 大于最大值
    // if (Xcount<0||Xcount+PXcount>=maxXcount) {
    //   return false;
    // }
    // if (Ycount<0||Ycount+PYcount>=maxYcount) {
    //   return false;
    // }
    //真正位置
    // let [RealX,RealY] = [box*Xcount,box*Ycount];
    console.log("============");

    console.dir(ev.target.parentElement.parentElement.scrollTop);
    console.log("拖拽元素所占的格子XY",[PXcount,PYcount]);
    console.log("鼠标在拖拽元素中的位置XY",[TX,TY]);
    console.log("接收元素距离左侧/上侧的距离",[evtaroffsetLeft,evtaroffsetTop]);
    console.log("当前鼠标左侧/上侧距离",[pageX,pageY]);
    console.log("鼠标在接收元素中的位置",[CX,CY]);
    console.log("拖拽元素左顶点位于接收元素中的位置",[RX,RY]);
    console.log("当前位置网格约束",[Xcount,Ycount]);
    console.log("测试",ev.target.scrollTop);
    // console.log("真正位置:",[RealX,RealY]);
    let ele = document.getElementById(data)!;
    ele.style.left = -Math.floor(MX/box)*box + 'px';
    //减去滚动距离 ev.target.parentElement.parentElement.scrollTop
    ele.style.top = -Math.floor(MY/box)*box - Math.round(ev.target.parentElement.parentElement.scrollTop/box)*box + 'px';
    ev.target.appendChild(ele);
  }

  // -- 用于接收容器  当某被拖动的对象在另一对象容器范围内拖动时触发此事件350ms
  function dragOverHandler(ev:any){
        //阻止默认行为
        ev.preventDefault();
        // console.log(ev.target);
        //设置放置效果
        ev.dataTransfer.dropEffect = "move"
  }







  return (
    <div className={style.body}>
      {
        hasInfoDiv.map((item,key)=>{
          return <ThreeD key={key}></ThreeD>;
        })
      }
      <div className={style.title}>WareHouse //仓库</div>
      <div className={style.main}>
        <div className={style.left}>
            <div className={style.division}>
              {/* 无用 */}
              <div></div>
              {/* 3头部：耳机、头盔、护目镜 */}
              <div>
                <div className={style.equment}>耳机</div>
                <div className={style.equment}>头盔</div>
                <div className={style.equment}>护目镜</div>
              </div>
              {/* 3上胸部：左肩膀、上胸部、右肩膀 */}
              <div>
                <div className={style.equment}>左肩</div>
                <div className={style.equment}>护胸</div>
                <div className={style.equment}>右肩</div>
              </div>
              {/* 3腹部：左胳膊、腹部、右胳膊 */}
              <div>
                <div className={style.equment}>护臂</div>
                <div className={style.equment}>护腹</div>
                <div className={style.equment}>护臂</div>
              </div>
              {/* 2双手：左手、右手 */}
              <div>
                <div className={style.equment}>左手</div>
                <div className={style.equment}>右手</div>
              </div>
              {/* 2左大腿、右大腿 */}
              <div>
                <div className={style.equment}>护腿</div>
                <div className={style.equment}>护腿</div>
              </div>
              <div>
                {/* 2左小腿、右小腿 */}
                <div className={style.equment}>左小腿</div>
                <div className={style.equment}>右小腿</div>
              </div>
              {/* 2左脚、右脚 */}
              <div>
                <div className={style.equment}>左脚</div>
                <div className={style.equment}>右脚</div>
              </div>
            </div>
            <img src="/picture/human.png" alt="human" />
        </div>

        <div className={style.mid}>
          
          {/* 状态栏 */}
          <div>
             <br />
             <span style={{fontSize:25+'px',fontWeight: 800}}>主要状态</span>
             <br /><br />
            <span>生命值💖 :  <NCroll num={100} size={18}/> / <NCroll num={100} size={18}/></span> 
            <br />
            <span>辐射值🧠 :  <NCroll num={100} size={18}/> / <NCroll num={100} size={18}/></span> 
            <br />
            <span>饱腹感🍖 :  <NCroll num={100} size={18}/> / <NCroll num={100} size={18}/></span> 
            <br />
            <span>含水量💦 :  <NCroll num={100} size={18}/> / <NCroll num={100} size={18}/></span> 
            <br />
            <span>负重值🦾 :  <NCroll num={100} size={18}/> / <NCroll num={100} size={18}/></span> 
            <br /><br />
            <span style={{fontSize:25+'px',fontWeight: 800}}>其他状态</span>
            <br /><br />
            <span>耐力🏀 : Lv1</span> <span className={style.allprocess}><span className={style.hasprocess}></span></span>
            <br />
            <span>力量💪 : Lv1</span> <span className={style.allprocess}><span className={style.hasprocess}></span></span>
            <br />
            <span>活力🏋️‍♂️ : Lv1</span> <span className={style.allprocess}><span className={style.hasprocess}></span></span>
            <br />
            <span>健康💗 : Lv1</span> <span className={style.allprocess}><span className={style.hasprocess}></span></span>
            <br />
            <span>抗压🐱‍🚀 : Lv1</span> <span className={style.allprocess}><span className={style.hasprocess}></span></span>
            <br />
            <span>代谢💩 : Lv1</span> <span className={style.allprocess}><span className={style.hasprocess}></span></span>
            <br />
            <span>免疫🥼 : Lv1</span> <span className={style.allprocess}><span className={style.hasprocess}></span></span>
            <br />
            <span>感知🐱‍👤 : Lv1</span> <span className={style.allprocess}><span className={style.hasprocess}></span></span>
            <br />
            <span>魅力🤡 : Lv1</span> <span className={style.allprocess}><span className={style.hasprocess}></span></span>
            <br />
            <span>注意👀 : Lv1</span> <span className={style.allprocess}><span className={style.hasprocess}></span></span>
            <br />
            <span>记忆🙇‍♂️ : Lv1</span> <span className={style.allprocess}><span className={style.hasprocess}></span></span>
            <br />
            <span>枪械🤺 : Lv1</span> <span className={style.allprocess}><span className={style.hasprocess}></span></span>
            <br />
            <span>后座🧿 : Lv1</span> <span className={style.allprocess}><span className={style.hasprocess}></span></span>
            <br />
            <span>隐蔽👣 : Lv1</span> <span className={style.allprocess}><span className={style.hasprocess}></span></span>
            <br />
            <span>搜索🛒 : Lv1</span> <span className={style.allprocess}><span className={style.hasprocess}></span></span>
            <br />
            <span>弹匣💣 : Lv1</span> <span className={style.allprocess}><span className={style.hasprocess}></span></span>
            <br />
          </div>
          {/* 武器栏 */}
          <div>
            {/* 主武器 */}
            <div>
              <span>主武器__连发 弹匣:30发__5.56__满</span>
              <Thing tid={2}/>
            </div>
            {/* 副武器 */}
            <div>
              <span>副武器__单发 弹匣:30发__5.56__满</span>
              <Thing tid={3}/>
            </div>
          </div>

          {/* 口袋栏 */}
          <div>
            <span>口袋栏</span>
            <div className={style.walletContain} onDrop={dropHandler} onDragOver={dragOverHandler}>
              {
                wallt.map((item,index)=>{
                  if (index < hasWallt) {
                    return <div className={style.grid} data-place={true} key={index}></div>
                  }
                  else{
                    return <div className={style.grid} data-place={false} key={index}></div>
                  }
                })
              }
              <Thing tid={4}/>
            </div>
          </div>

          {/* 背包栏 */}
          <div>
          <span>背包</span>
          </div>

          {/* 保险箱 */}
          <div>
          <span>保险箱</span>
          <div className={style.insuranceContain}>
              {
                insurance.map((item,index)=>{
                  if (index < hasInsurance) {
                    return <div className={style.grid} data-place={true} key={index}></div>
                  }
                  else{
                    return <div className={style.grid} data-place={false} key={index}></div>
                  }
                })
              }
          </div>
          </div>

        </div>
        {/* 仓库 */}
        <div className={style.right}>
            <div className={style.contain} onDrop={dropHandler} onDragOver={dragOverHandler}> 
            <Thing tid={1}/>

              {
                boxSize.map((item,index)=>{
                  if (index < hasboxSize) {
                    return <div className={style.grid} data-place={true} key={index}></div>
                  }
                  else{
                    return <div className={style.grid} data-place={false} key={index}></div>
                  }
                })
              }
            </div>
        </div>
      </div>
    </div>
  )
}
