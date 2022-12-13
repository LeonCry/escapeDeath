import React from 'react'
import style from './index.module.scss'
export default function WareHouse() {

  let [boxSize,setBoxSizeFn]:[Array<number>,Function] = React.useState(new Array(720).fill(0));
  let [hasboxSize,setHasBoxSizeFn]:[number,Function] = React.useState(360);
  let [wallt,setWallt]:[Array<number>,Function] = React.useState(new Array(32).fill(0));
  let [hasWallt,setHasWallt]:[number,Function] = React.useState(16);
  let [insurance,setInsurance]:[Array<number>,Function] = React.useState(new Array(16).fill(0));
  let [hasInsurance,setHasInsurance]:[number,Function] = React.useState(8);
  return (
    <div className={style.body}>
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
             <span style={{fontSize:3+'vh',fontWeight: 800}}>主要状态</span>
             <br /><br />
            <span>生命值💖 :  100 / 100</span> 
            <br />
            <span>辐射值🧠 :  100 / 100</span> 
            <br />
            <span>饱腹感🍖 :  100 / 100</span> 
            <br />
            <span>含水量💦 :  100 / 100</span> 
            <br />
            <span>负重值🦾 :  100 / 100</span> 
            <br /><br />
            <span style={{fontSize:3+'vh',fontWeight: 800}}>其他状态</span>
            <br /><br />
            <span>耐力🏀 : Lv1</span> <span className={style.allprocess}><span className={style.hasprocess}>60%</span></span>
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
              <div className={style.firstWeapon}>
                <img src="./picture/things/weapon/AK-47After.png" alt="武器" />
              </div>
            </div>
            {/* 副武器 */}
            <div>
              <span>副武器__单发 弹匣:30发__5.56__满</span>
              <div className={style.secondWeapon}>

              </div>
            </div>
          </div>

          {/* 口袋栏 */}
          <div>
            <span>口袋栏</span>
            <div className={style.walletContain}>
              {
                wallt.map((item,index)=>{
                  if (index < hasWallt) {
                    return <div className={style.grid} data-place={true}></div>
                  }
                  else{
                    return <div className={style.grid} data-place={false}></div>
                  }
                })
              }
              <div className={style.text}>
                <img src="./picture/things/weapon/AK-47After.png" alt="武器" />
              </div>
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
                    return <div className={style.grid} data-place={true}></div>
                  }
                  else{
                    return <div className={style.grid} data-place={false}></div>
                  }
                })
              }
          </div>
          </div>

        </div>
        <div className={style.right}>
            <div className={style.contain}>
              {
                boxSize.map((item,index)=>{
                  if (index < hasboxSize) {
                    return <div className={style.grid} data-place={true}></div>
                  }
                  else{
                    return <div className={style.grid} data-place={false}></div>
                  }
                })
              }
            </div>
        </div>
      </div>
    </div>
  )
}
