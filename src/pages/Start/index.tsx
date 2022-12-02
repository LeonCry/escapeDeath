import React from 'react'
import  {useNavigate} from 'react-router-dom'
import style from './index.module.scss'
export default function Start(): React.ReactNode {
  //此处用来做类型声明
  type videoDarkerFn = (isEnter:boolean) => void;
  type changeRouteFn = () => void;
  //此处定义全局变量
  const history = useNavigate();
  let [isDarker,setDarker]:[boolean,(isDarker:boolean)=>void] = React.useState(false);


  //此处定义函数
  //背景自定义变暗
  const videoDarker:videoDarkerFn = function(isEnter){
    if (isEnter) {
      setDarker(true);
    }
    else{
      setDarker(false);
    }
  }

  const changeRoute:changeRouteFn = function(){
    history('/main');
  }



  return (
    <div className={style.warDiv} data-darker={isDarker}>
      <video className={style.warVideo} data-darker={isDarker} autoPlay={true} muted={true} src='../../../video/gun1.mp4'></video>
      <div className={style.title} data-darker={isDarker}>
        <span>ESPCAE FROM DEATH</span>
      </div>
      <div className={style.login} onMouseEnter={()=>videoDarker(true)} onMouseLeave={()=>videoDarker(false)}>
        <div className={style.head}>
          <img src='../../../head/head.jpg' alt="头像" />
          <br />
          <span>username</span>
          <br />
          <div className={style.startbut}>
            <svg className={style.svg} xmlns="http://www.w3.org/2000/svg" version="1.1">
              <defs>
                <filter id="gooey">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
                  <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0
                  0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="highContrastGraphic" />
                  <feComposite in="SourceGraphic" in2="highContrastGraphic" operator="atop" />
                </filter>
              </defs>
            </svg>
            <button onClick={changeRoute}>
              <span className={style.bubbles}>
                <span className={style.bubble}>
                </span><span className={style.bubble}>
                </span><span className={style.bubble}>
                </span><span className={style.bubble}>
                </span><span className={style.bubble}>
                </span><span className={style.bubble}>
                </span><span className={style.bubble}>
                </span><span className={style.bubble}>
                </span><span className={style.bubble}>
                </span><span className={style.bubble}></span>
              </span>
              <span>START</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
