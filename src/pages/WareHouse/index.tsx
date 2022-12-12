import React from 'react'
import style from './index.module.scss'
export default function WareHouse() {
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
                <div className={style.equment}></div>
                <div className={style.equment}></div>
                <div className={style.equment}></div>
              </div>
              {/* 3上胸部：左肩膀、上胸部、右肩膀 */}
              <div>
                <div className={style.equment}></div>
                <div className={style.equment}></div>
                <div className={style.equment}></div>
              </div>
              {/* 3腹部：左胳膊、腹部、右胳膊 */}
              <div>
                <div className={style.equment}></div>
                <div className={style.equment}></div>
                <div className={style.equment}></div>
              </div>
              {/* 2双手：左手、右手 */}
              <div>
                <div className={style.equment}></div>
                <div className={style.equment}></div>
              </div>
              {/* 2左大腿、右大腿 */}
              <div>
                <div className={style.equment}></div>
                <div className={style.equment}></div>
              </div>
              <div>
                {/* 2左小腿、右小腿 */}
                <div className={style.equment}></div>
                <div className={style.equment}></div>
              </div>
              {/* 2左脚、右脚 */}
              <div>
                <div className={style.equment}></div>
                <div className={style.equment}></div>
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
            <span>生命值💖 : 100</span> 
            <span>辐射值🧠 : 100</span> 
            <br /><br />
            <span>饱腹感🍖 : 100</span> 
            <span>含水量💦 : 100</span> 
            <br /><br />
            <span>负重值🦾 : 100 / 100</span> 
            <br /><br />
            <span style={{fontSize:3+'vh',fontWeight: 800}}>其他状态</span>
            <br /><br />
            <span>耐力💖 : Lv1</span> <span className={style.allprocess}><span className={style.hasprocess}>60%</span></span>
            <br />
            <span>力量🧠 : Lv1</span> <span className={style.allprocess}><span className={style.hasprocess}></span></span>
            <br />
            <span>活力🧠 : Lv1</span> <span className={style.allprocess}><span className={style.hasprocess}></span></span>
            <br />
            <span>耐力💖 : Lv1</span> <span className={style.allprocess}><span className={style.hasprocess}></span></span>
            <br />
            <span>力量🧠 : Lv1</span> <span className={style.allprocess}><span className={style.hasprocess}></span></span>
            <br />
            <span>活力🧠 : Lv1</span> <span className={style.allprocess}><span className={style.hasprocess}></span></span>
            <br />
            <span>耐力💖 : Lv1</span> <span className={style.allprocess}><span className={style.hasprocess}></span></span>
            <br />
            <span>力量🧠 : Lv1</span> <span className={style.allprocess}><span className={style.hasprocess}></span></span>
            <br />
            <span>活力🧠 : Lv1</span> <span className={style.allprocess}><span className={style.hasprocess}></span></span>
            <br />
          </div>
          {/* 武器栏 */}
          <div>
            {/* 主武器 */}
            <div></div>
            {/* 副武器 */}
            <div></div>
          </div>

          {/* 口袋栏 */}
          <div>

          </div>

          {/* 背包栏 */}
          <div>

          </div>

        </div>
        <div className={style.right}></div>
      </div>
    </div>
  )
}
