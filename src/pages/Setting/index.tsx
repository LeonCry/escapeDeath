import React from 'react'
import style from './index.module.scss'
import  {useNavigate} from 'react-router-dom'
interface settingT{
  settingName:string,
  settingOpt:Array<string>,
  settingCur:number,
}
export default function Setting() {

  const history = useNavigate();
  let defaultSettings = [
    {
      settingName:'用户',
      settingOpt:['测试用户A'],
      settingCur:0,
    },
    {
      settingName:'自动登录',
      settingOpt:['否','1天内','3天内','7天内'],
      settingCur:0,
    },
    {
      settingName:'游戏音乐',
      settingOpt:['开','关'],
      settingCur:0,
    },
    {
      settingName:'游戏音效',
      settingOpt:['开','关'],
      settingCur:0,
    },
    {
      settingName:'游戏字幕',
      settingOpt:['开','关'],
      settingCur:0,
    },
    {
      settingName:'模型引入方式',
      settingOpt:['iframe','模型文件','仅图片'],
      settingCur:0,
    },
    {
      settingName:'模型加载方式',
      settingOpt:['渐加载','全加载'],
      settingCur:0,
    },
    {
      settingName:'模型进入方式',
      settingOpt:['动画','定格'],
      settingCur:0,
    },
    {
      settingName:'页面加载方式',
      settingOpt:['动态加载','完全加载'],
      settingCur:0,
    },
    {
      settingName:'存档方式',
      settingOpt:['自动存档','操作存档','10s存档'],
      settingCur:0,
    },
  
  ];
  let [settings,setSetting]:[Array<settingT>,Function] = React.useState(defaultSettings);

    function returnMenu(){
      history(-1);
    }

    function saveOpt(){
      console.log("保存成功!")
    }

    function leftClick(key:number){
      return ()=>{
        let len = settings[key].settingOpt.length;
        let doc = document.getElementById("setting"+key);
        if (settings[key].settingCur===0) {
          settings[key].settingCur = len - 1;
          doc!.style.left = -150 * (len-1) + 'px';
        }
        else{
          settings[key].settingCur = settings[key].settingCur - 1;
          doc!.style.left = 150 + (parseInt(doc!.style.left)|0) + 'px';
        }
        console.log(settings[key])
        setSetting(JSON.parse(JSON.stringify(settings)));
      }
    }

    function rightClick(key:number){
      return ()=>{
        let len = settings[key].settingOpt.length;
        let doc = document.getElementById("setting"+key);
        if (settings[key].settingCur===len - 1) {
          settings[key].settingCur = 0;
          doc!.style.left = 0 + 'px';
        }
        else{
          settings[key].settingCur = settings[key].settingCur + 1;
          doc!.style.left = -150 + (parseInt(doc!.style.left)|0) + 'px';
        }
        console.log(settings[key])
        setSetting(JSON.parse(JSON.stringify(settings)));
      }
    }

  return (
    <div className={style.body}>
      <div className={style.innerbody}></div>
      <div className={style.mainsetting}>
          <h1>游戏设置</h1>
          {
            settings.map((item,key)=>{
              return <div  key={key}>{item.settingName}<div>
                <button onClick={leftClick(key)}>❮</button>
                <div id={'setting'+key}>
                {
                  item.settingOpt.map((item2,key2)=>{
                    return <span key={key2}>{item2}</span>
                  })
                }
                </div>
                
                <button onClick={rightClick(key)}>❯</button>
                </div></div>
            })
          }
          <div className={style.bottoms}>
            <button onClick={saveOpt}>保存设置</button>
            <button onClick={returnMenu}>返回主菜单</button>
            </div>
      </div>
    </div>
  )
}
