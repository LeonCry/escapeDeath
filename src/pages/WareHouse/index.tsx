import React from 'react'
import pubsub from 'pubsub-js'
import Thing from '../../components/Thing';
import ThreeD from '../../components/ThreeD';
import style from './index.module.scss'
import NCroll from '../../components/NCroll';

interface items{
  tid:string,
  wid:number,
  hei:number,
  src:string,
  lv:number,
  tname:string,
  ttype:string,
  dsrc:string
}
interface things{
  things:items,
}



export default function WareHouse() {

  //仓库总大小
  let [boxSize, setBoxSizeFn]: [Array<number>, Function] = React.useState(new Array(720).fill(0));
  //仓库已有大小
  let [hasboxSize, setHasBoxSizeFn]: [number, Function] = React.useState(360);
  //口袋总大小
  let [wallt, setWallt]: [Array<number>, Function] = React.useState(new Array(32).fill(0));
  //口袋已有大小
  let [hasWallt, setHasWallt]: [number, Function] = React.useState(16);
  //保险箱总大小
  let [insurance, setInsurance]: [Array<number>, Function] = React.useState(new Array(16).fill(0));
  //保险箱已有大小
  let [hasInsurance, setHasInsurance]: [number, Function] = React.useState(8);
  //展示物品细节的个数
  let [hasInfoDiv, setHasInfoDiv]: [Array<things>, Function] = React.useState([]);

  //用来存放仓库物品的数组--用于初始化和上传服务器
  let [warehouseThings,setWareThings]:[Array<any>,Function] = React.useState(new Array(720).fill(undefined));
  warehouseThings[4] = {tid:1,wid:4,hei:2,lv:4,src:'./picture/things/weapon/AK-47After.png',tname:'AK-47',ttype:'突击步枪',dsrc:'https://sketchfab.com/models/c1fa5b79ab0c42a1949506b3e0137424/embed'};
  warehouseThings[109] = {tid:109,wid:2,hei:2,lv:7,src:'./picture/things/weapon/heads.png',tname:'三体军',ttype:'头盔',dsrc:'https://sketchfab.com/models/8fd2cf7c61cd464883632c7fce7fdf54/embed'};
  warehouseThings[0] = {tid:0,wid:4,hei:2,lv:1,src:'./picture/things/weapon/M4A1.png',tname:'M4A1',ttype:'突击步枪',dsrc:'https://sketchfab.com/models/17c8ff1b23204de4a69f74b6527d6eab/embed'};
  warehouseThings[24] = {tid:12,wid:4,hei:4,lv:7,src:'./picture/things/weapon/backpack.png',tname:'登山背包',ttype:'背包',dsrc:'https://sketchfab.com/models/4732564eec0542ed8b1855f381e64127/embed'};
  warehouseThings[28] = {tid:28,wid:1,hei:1,lv:2,src:'./picture/things/weapon/chip1.png',tname:'A',ttype:'芯片',dsrc:'https://sketchfab.com/models/391d1d514d294c6db34c5e672e88c6e9/embed'};
  warehouseThings[29] = {tid:29,wid:1,hei:1,lv:2,src:'./picture/things/weapon/chip2.png',tname:'Z',ttype:'芯片',dsrc:'https://sketchfab.com/models/7686cfc26b68477cb64d33a467c9f9bf/embed'};
  warehouseThings[30] = {tid:30,wid:1,hei:1,lv:1,src:'./picture/things/weapon/sight.png',tname:'单倍',ttype:'瞄准镜',dsrc:'https://sketchfab.com/models/9e06921807da4dde9d77596dc58ed8f2/embed'};
  warehouseThings[72] = {tid:72,wid:4,hei:3,lv:3,src:'./picture/things/weapon/vest.png',tname:'防弹衣',ttype:'护甲',dsrc:'https://sketchfab.com/models/5a137f96c6d54d5eab0793b96a4a638c/embed'};
  warehouseThings[115] = {tid:115,wid:2,hei:2,lv:5,src:'./picture/things/weapon/leftHands.png',tname:'绞龙',ttype:'手套',dsrc:'https://sketchfab.com/models/a5bc047bb07e4fc8a025e59023455b62/embed'};
  warehouseThings[117] = {tid:117,wid:2,hei:2,lv:5,src:'./picture/things/weapon/rightHands.png',tname:'玉城',ttype:'手套',dsrc:'https://sketchfab.com/models/620fd8a3b781465bb11cb7a10e30d6bc/embed'};
  warehouseThings[80] = {tid:80,wid:2,hei:3,lv:6,src:'./picture/things/weapon/ironLeg.png',tname:'钢铁侠',ttype:'义腿',dsrc:'https://sketchfab.com/models/27ff42d128274f7889491fae7513de13/embed'};
  warehouseThings[82] = {tid:82,wid:2,hei:3,lv:6,src:'./picture/things/weapon/futureLeg.png',tname:'未来城',ttype:'义腿',dsrc:'https://sketchfab.com/models/9aeec76be3ef4264b177886df1f407d2/embed'};
  warehouseThings[111] = {tid:111,wid:2,hei:2,lv:1,src:'./picture/things/weapon/bugu.png',tname:'布谷',ttype:'鞋',dsrc:'https://sketchfab.com/models/3d8d249c816648288ab0e9cb307141ac/embed'};
  warehouseThings[113] = {tid:113,wid:2,hei:2,lv:1,src:'./picture/things/weapon/bugu.png',tname:'布谷',ttype:'鞋',dsrc:'https://sketchfab.com/models/3d8d249c816648288ab0e9cb307141ac/embed'};
  warehouseThings[40] = {tid:40,wid:4,hei:3,lv:7,src:'./picture/things/weapon/cbpk.png',tname:'赛博朋克V',ttype:'护甲',dsrc:'https://sketchfab.com/models/17813414cc7d447e9f574c4299341c93/embed'};
  warehouseThings[44] = {tid:44,wid:4,hei:3,lv:6,src:'./picture/things/weapon/lieyan.png',tname:'赛博朋克烈焰',ttype:'护甲',dsrc:'https://sketchfab.com/models/a1be04c7ff2745e7b977fdee02d79657/embed'};
  warehouseThings[8] = {tid:8,wid:4,hei:3,lv:5,src:'./picture/things/weapon/zfz2.png',tname:'执法者',ttype:'护甲',dsrc:'https://sketchfab.com/models/f2cb007403144ae0bc7ae2231384c5dc/embed'};
  warehouseThings[76] = {tid:76,wid:4,hei:2,lv:4,src:'./picture/things/weapon/sword.png',tname:'玉刃',ttype:'刀剑',dsrc:'https://sketchfab.com/models/e3caffae38ff43aea3476cea700b6a00/embed'};
  const gunGrid: Array<number> = new Array(8).fill(0);

  let midRef= React.createRef<HTMLDivElement>();
  let rightRef= React.createRef<HTMLDivElement>();
  React.useEffect(() => {
    pubsub.subscribe('showInfo', (_: unknown, items: any) => {
      const item = items.things;
      let hasFlag:true|false = false;
      //如果找不到这个物品，则添加
      hasInfoDiv.forEach((keyitem)=>{
        if (keyitem.things.tid===item.tid) {
          hasFlag = true;
          return ;
        }
      })
      if (!hasFlag) {
        console.log("新增,",item.tid);
        setHasInfoDiv([...hasInfoDiv, items]);
        hasInfoDiv = [...hasInfoDiv,items];
        console.log("hasInfoDiv",hasInfoDiv);
      }
    })
    pubsub.subscribe('decreseInfo', (_: unknown, item: any) => {
      console.log(item);
      let keys:number = 0;
      hasInfoDiv.forEach((keyitem,key)=>{
        if (keyitem.things.tid===item.tid) {
          keys = key;
          return ;
        }
      })
      // let newInfo = hasInfoDiv.slice(0, keys - 1).concat(hasInfoDiv.slice(keys));
      let newInfo = hasInfoDiv.slice(0, keys).concat(hasInfoDiv.slice(keys+1));
      console.log("newInfo-keys",newInfo,keys);
      hasInfoDiv = newInfo;
      setHasInfoDiv(newInfo);
    })
    //订阅:移动仓库物品位置时
    pubsub.subscribe('warehouseThingChange', (_: unknown, arr: Array<any>) => {
      // setWareThings(arr);
    })

  }, []);


  // 拖拽相关
  //用来处理欲接收元素携带的数据信息 -- 用于接收容器---仓库
  function dropHandler(ev: any) {
    const box = 59.5;
    //仓库的最大长/高
    const maxXcount = 12;
    const maxYcount = 30;
    //阻止默认行为
    ev.preventDefault();

    // pubsub.publish("sendWareArr",warehouseThings); 
    //获得数据
    let data = ev.dataTransfer.getData("id");
    //获得当前元素的左顶点的位置
    let loc = ev.dataTransfer.getData("leftTopPoint");
    //拖拽元素的宽与长
    let PP = ev.dataTransfer.getData("eleCount");
    let mouseRelLocation = ev.dataTransfer.getData("mouseRelLocation");
    let sign = ev.dataTransfer.getData("sign");
    //判断

    //红色区域不能放置
    if (ev.target.dataset.place==='false'||ev.target.dataset.place===undefined) {
      return false;
    }
    // //X轴的限制
    // if (loc[0]<0||loc[0]+PP[0]>maxXcount) {
    //   return false;
    // }
    // //Y轴的限制
    // if (loc[1]<0||loc[1]+PP[1]>maxYcount) {
    //   return false;
    // }
    //重叠限制将后面再弄
    



    //拖拽元素所占的格子
    let [PXcount, PYcount] = [Number(PP.split(',')[0]), Number(PP.split(',')[1])];
    //TX,TY表示鼠标在拖拽元素中的位置
    let [TX, TY] = [Number(loc.split(',')[0]), Number(loc.split(',')[1])];
    //MX,MY鼠标相对位置
    let [MX, MY] = [Number(mouseRelLocation.split(',')[0]), Number(mouseRelLocation.split(',')[1])];
    // console.log([TX,TY])
    //接收元素距离左侧的距离
    let evtaroffsetLeft = ev.target.offsetLeft;
    //接收元素距离上侧的距离
    let evtaroffsetTop = ev.target.offsetTop;
    //当前鼠标左侧距离
    let pageX = ev.screenX;
    //当前鼠标右侧距离
    let pageY = ev.screenY;
    //CX,CY表示鼠标在接收元素中的位置
    let [CX, CY] = [pageX - evtaroffsetLeft, pageY - evtaroffsetTop];
    // RX,RY表示拖拽元素左顶点位于接收元素中的位置
    let [RX, RY] = [CX - TX, CY - TY];

    //当前位置网格约束
    let Xcount = Math.floor(RX / box);
    let Ycount = Math.floor(RY / box);
    // 如果小于0 或者 大于最大值
    // if (Xcount<0||Xcount+PXcount>=maxXcount) {
    //   return false;
    // }
    // if (Ycount<0||Ycount+PYcount>=maxYcount) {
    //   return false;
    // }
    //真正位置
    // let [RealX,RealY] = [box*Xcount,box*Ycount];
    // console.log("============");
    // console.log(ev);
    // console.dir(ev.target.parentElement.parentElement.scrollTop);
    // console.log("拖拽元素所占的格子XY", [PXcount, PYcount]);
    // console.log("鼠标在拖拽元素中的位置XY", [TX, TY]);
    // console.log("接收元素距离左侧/上侧的距离", [evtaroffsetLeft, evtaroffsetTop]);
    // console.log("当前鼠标左侧/上侧距离", [pageX, pageY]);
    // console.log("鼠标在接收元素中的位置", [CX, CY]);
    // console.log("拖拽元素左顶点位于接收元素中的位置", [RX, RY]);
    // console.log("当前位置网格约束", [Xcount, Ycount]);
    // console.log("测试", ev.target.scrollTop);
    // console.log("真正位置:",[RealX,RealY]);
    let ele = document.getElementById(data)!;
    //根据左侧鼠标位置修正位置
    // ele.style.left = -Math.floor(MX / box) * box + 'px';
    console.log("scroll",(rightRef.current!).scrollTop);
    //减去滚动距离 ev.target.parentElement.parentElement.scrollTop
    // if (sign==="mid") {
      // ele.style.top = -Math.floor(MY / box) * box - Math.round((rightRef.current!).scrollTop / box) * box - Math.round((midRef.current!).scrollTop/box) *box + 'px';
    // }
    // else{
      // ele.style.top = -Math.floor(MY / box) * box - Math.round((rightRef.current!).scrollTop / box) * box  + 'px';
      // ele.style.top = -Math.floor(MY / box) * box - Math.round((rightRef.current!).scrollTop / box) * box  + 'px';
    // }
      ev.target.appendChild(ele);
      // setTimeout(() => {
      //   ev.target.removeChild(ele);
      // }, 10);
  }
    // 拖拽相关
  //用来处理欲接收元素携带的数据信息 -- 用于接收容器---武器/左侧装备
  function weaponDropHandler(ev: any) {
    //阻止默认行为
    ev.preventDefault();
    if (ev.target.dataset.sign===undefined) {
      return false;
    }
    //获得数据
    let data = ev.dataTransfer.getData("id");
    let ele = document.getElementById(data)!;
    ele.style.left = '0';
    ele.style.top = '0';
    ev.target.appendChild(ele);
  }

    //用来处理欲接收元素携带的数据信息 -- 用于接收容器---口袋/保险箱
  function IntractdropHandler(ev: any) {
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
      let sign = ev.dataTransfer.getData("sign");
      if (ev.target.dataset.place==='false'||ev.target.dataset.place===undefined) {
        return false;
      }
      //拖拽元素所占的格子
      let [PXcount, PYcount] = [Number(PP.split(',')[0]), Number(PP.split(',')[1])];
      //TX,TY表示鼠标在拖拽元素中的位置
      let [TX, TY] = [Number(loc.split(',')[0]), Number(loc.split(',')[1])];
      //MX,MY鼠标相对位置
      let [MX, MY] = [Number(mouseRelLocation.split(',')[0]), Number(mouseRelLocation.split(',')[1])];
      // console.log([TX,TY])
      //接收元素距离左侧的距离
      let evtaroffsetLeft = ev.target.offsetLeft;
      //接收元素距离上侧的距离
      let evtaroffsetTop = ev.target.offsetTop;
      //当前鼠标左侧距离
      let pageX = ev.screenX;
      //当前鼠标右侧距离
      let pageY = ev.screenY;
      //CX,CY表示鼠标在接收元素中的位置
      let [CX, CY] = [pageX - evtaroffsetLeft, pageY - evtaroffsetTop];
      // RX,RY表示拖拽元素左顶点位于接收元素中的位置
      let [RX, RY] = [CX - TX, CY - TY];
  
      //当前位置网格约束
      let Xcount = Math.floor(RX / box);
      let Ycount = Math.floor(RY / box);
      console.log("============");
      console.log(ev);
      console.dir(ev.target.parentElement.parentElement.scrollTop);
      console.log("拖拽元素所占的格子XY", [PXcount, PYcount]);
      console.log("鼠标在拖拽元素中的位置XY", [TX, TY]);
      console.log("接收元素距离左侧/上侧的距离", [evtaroffsetLeft, evtaroffsetTop]);
      console.log("当前鼠标左侧/上侧距离", [pageX, pageY]);
      console.log("鼠标在接收元素中的位置", [CX, CY]);
      console.log("拖拽元素左顶点位于接收元素中的位置", [RX, RY]);
      console.log("当前位置网格约束", [Xcount, Ycount]);
      console.log("测试", ev.target.scrollTop);
      console.log("sign",sign)
      // console.log("真正位置:",[RealX,RealY]);
      let ele = document.getElementById(data)!;
      ele.style.left = -Math.floor(MX / box) * box + 'px';
      //减去滚动距离 ev.target.parentElement.parentElement.scrollTop

      // if (sign==="mid") {
      //   ele.style.top = -Math.floor(MY / box) * box - Math.round(ev.target.parentElement.parentElement.scrollTop / box) * box - Math.round((midRef.current!).scrollTop/box) *box + 'px';
      // }
      // else{
      //   ele.style.top = -Math.floor(MY / box) * box - Math.round(ev.target.parentElement.parentElement.scrollTop / box) * box  + 'px';
      // }
      ev.target.appendChild(ele);
  }

  // -- 用于接收容器  当某被拖动的对象在另一对象容器范围内拖动时触发此事件350ms
  function dragOverHandler(ev: any) {
    //阻止默认行为
    ev.preventDefault();
    
    ev.onkeydown = function(e:any){
        console.log(e);
    }
    // console.log(ev.target);
    //设置放置效果
    ev.dataTransfer.dropEffect = "move";
  }


  return (
    <div className={style.body}>
      {
        hasInfoDiv.map((item, key) => {
          return <ThreeD key={key} items={item}></ThreeD>;
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
              <div className={style.equment} onDrop={weaponDropHandler} onDragOver={dragOverHandler} data-sign={'lef'}>芯片</div>
              <div className={style.equment} onDrop={weaponDropHandler} onDragOver={dragOverHandler} data-sign={'lef'}>头盔</div>
              <div className={style.equment} onDrop={weaponDropHandler} onDragOver={dragOverHandler} data-sign={'lef'}>芯片</div>
            </div>
            {/* 3上胸部：左肩膀、上胸部、右肩膀 */}
            <div>
            </div>
            {/* 3腹部：左胳膊、腹部、右胳膊 */}
            <div>
              {/* <div className={style.equment} onDrop={weaponDropHandler} onDragOver={dragOverHandler} data-sign={'lef'}>护臂</div> */}
              <div className={style.equment} onDrop={weaponDropHandler} onDragOver={dragOverHandler} data-sign={'lef'}>护甲</div>
              {/* <div className={style.equment} onDrop={weaponDropHandler} onDragOver={dragOverHandler} data-sign={'lef'}>护臂</div> */}
            </div>
            {/* 2双手：左手、右手 */}
            <div>
              <div className={style.equment} onDrop={weaponDropHandler} onDragOver={dragOverHandler} data-sign={'lef'}>左手</div>
              <div className={style.equment} onDrop={weaponDropHandler} onDragOver={dragOverHandler} data-sign={'lef'}>右手</div>
            </div>
            {/* 2左大腿、右大腿 */}
            <div>
              <div className={style.equment} onDrop={weaponDropHandler} onDragOver={dragOverHandler} data-sign={'lef'}>义腿-左</div>
              <div className={style.equment} onDrop={weaponDropHandler} onDragOver={dragOverHandler} data-sign={'lef'}>义腿-右</div>
            </div>
            <div>
            </div>
            {/* 2左脚、右脚 */}
            <div>
              <div className={style.equment} onDrop={weaponDropHandler} onDragOver={dragOverHandler} data-sign={'lef'}>左脚</div>
              <div className={style.equment} onDrop={weaponDropHandler} onDragOver={dragOverHandler} data-sign={'lef'}>右脚</div>
            </div>
          </div>
          <img src="/picture/human.png" alt="human" />
        </div>

        <div className={style.mid} ref={midRef}>

          {/* 状态栏 */}
          <div>
            <br />
            <span style={{ fontSize: 25 + 'px', fontWeight: 800 }}>主要状态</span>
            <br /><br />
            <span>生命值💖 :  <NCroll num={100} size={18} /> / <NCroll num={100} size={18} /></span>
            <br />
            <span>辐射值🧠 :  <NCroll num={100} size={18} /> / <NCroll num={100} size={18} /></span>
            <br />
            <span>饱腹感🍖 :  <NCroll num={100} size={18} /> / <NCroll num={100} size={18} /></span>
            <br />
            <span>含水量💦 :  <NCroll num={100} size={18} /> / <NCroll num={100} size={18} /></span>
            <br />
            <span>负重值🦾 :  <NCroll num={100} size={18} /> / <NCroll num={100} size={18} /></span>
            <br /><br />
            <span style={{ fontSize: 25 + 'px', fontWeight: 800 }}>其他状态</span>
            <br /><br />
            <span>耐力🏀 : Lv1</span> <span className={style.allprocess}><span className={style.hasprocess}></span></span>
            <br />
            <span>力量💪 : Lv1</span> <span className={style.allprocess}><span className={style.hasprocess}></span></span>
            <br />
            <span>活力🏋️‍♂️ : Lv1</span> <span className={style.allprocess}><span className={style.hasprocess}></span></span>
            <br />
            <span>健康💗 : Lv1</span> <span className={style.allprocess}><span className={style.hasprocess}></span></span>
            <br />
            <span>抗压🛡 : Lv1</span> <span className={style.allprocess}><span className={style.hasprocess}></span></span>
            <br />
            <span>代谢💩 : Lv1</span> <span className={style.allprocess}><span className={style.hasprocess}></span></span>
            <br />
            <span>免疫🥼 : Lv1</span> <span className={style.allprocess}><span className={style.hasprocess}></span></span>
            <br />
            <span>感知📸 : Lv1</span> <span className={style.allprocess}><span className={style.hasprocess}></span></span>
            <br />
            <span>魅力🤡 : Lv1</span> <span className={style.allprocess}><span className={style.hasprocess}></span></span>
            <br />
            <span>注意👀 : Lv1</span> <span className={style.allprocess}><span className={style.hasprocess}></span></span>
            <br />
            <span>记忆🙇‍♂️ : Lv1</span> <span className={style.allprocess}><span className={style.hasprocess}></span></span>
            <br />
            <span>枪械🔫 : Lv1</span> <span className={style.allprocess}><span className={style.hasprocess}></span></span>
            <br />
            <span>后座🧿 : Lv1</span> <span className={style.allprocess}><span className={style.hasprocess}></span></span>
            <br />
            <span>隐蔽👣 : Lv1</span> <span className={style.allprocess}><span className={style.hasprocess}></span></span>
            <br />
            <span>搜索🛒 : Lv1</span> <span className={style.allprocess}><span className={style.hasprocess}></span></span>
            <br />
            <span>弹匣🚭 : Lv1</span> <span className={style.allprocess}><span className={style.hasprocess}></span></span>
            <br />
          </div>
          {/* 武器栏 */}
          <div data-sign={'mid'}>
            {/* 主武器 */}
            <span>主武器__连发 弹匣:30发__5.56__满</span>
            <div className={style.weaponContaion} onDrop={weaponDropHandler} onDragOver={dragOverHandler} data-sign={'mid'}>
              
            </div>
          </div>
          <div data-sign={'mid'}>
            {/* 副武器 */}
            <span>副武器__单发 弹匣:30发__5.56__满</span>
            <div className={style.weaponContaion} onDrop={weaponDropHandler} onDragOver={dragOverHandler} data-sign={'mid'}>
              
            </div>
          </div>

          {/* 口袋栏 */}
          <div>
            <span>口袋栏</span>
            <div className={style.walletContain} onDrop={IntractdropHandler} onDragOver={dragOverHandler} data-sign={'mid'}>
            
              {
                wallt.map((item, index) => {
                  if (index < hasWallt) {
                    return <div className={style.grid} data-place={true} key={index} data-sign={'mid'}></div>
                  }
                  else {
                    return <div className={style.grid} data-place={false} key={index} data-sign={'mid'}></div>
                  }
                })
              }
              <br />
            </div>
          </div>

          {/* 背包栏 */}
          <div >
            <span>背包</span>
            <div className={style.backpack} onDrop={weaponDropHandler} onDragOver={dragOverHandler} data-sign={'backpack'}>

            </div>
          </div>

          {/* 保险箱 */}
          <div>
            <span>保险箱</span>
            <div className={style.insuranceContain} onDrop={IntractdropHandler} onDragOver={dragOverHandler} data-sign={'mid'}>
              {
                insurance.map((item, index) => {
                  if (index < hasInsurance) {
                    return <div className={style.grid} data-place={true} key={index} data-sign={'mid'}></div>
                  }
                  else {
                    return <div className={style.grid} data-place={false} key={index} data-sign={'mid'}></div>
                  }
                })
              }
              <br />
            </div>
          </div>

        </div>
        {/* 仓库 */}
        <div className={style.right} ref={rightRef}>
          <div className={style.contain} onDrop={dropHandler} onDragOver={dragOverHandler} data-sign={'warehouse'} >
            {
              boxSize.map((item, index) => {
                if (index < hasboxSize) {
                  if (warehouseThings[index]!==undefined) {
                    return <div className={style.grid} data-place={true} key={index} data-sign={'warehouse'}>
                      <Thing 
                      things={warehouseThings[index]}
                      key = {warehouseThings[index].tid}/>
                    </div>
                  }
                  else{
                    return <div className={style.grid} data-place={true} key={index} data-sign={'warehouse'}></div>
                  }
                }
                else {
                  return <div className={style.grid} data-place={false} key={index} data-sign={'warehouse'}></div>
                }
              })
            }
            <br />
          </div>
        </div>
      </div>
    </div>
  )
}
