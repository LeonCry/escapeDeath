import React, { Component } from 'react'
import pubsub from 'pubsub-js'
import style from './index.module.scss'
import * as THREE from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import Galaxy from "../../skybox/acc.jpg";
import NCroll from '../NCroll';
import Thing from '../Thing'

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

interface Iprops{
  items:things
}



export default class ThreeD extends Component<Iprops> {

  //props上的item

    item = this.props.items.things;
    divMoveRef = React.createRef<HTMLDivElement>();
    moveRef = React.createRef<HTMLDivElement>();
    state = {
      //使用我封装的3D 还是 iframe引入 ？
      isMyThreeD : false,
      //右侧是否展开
      isRightShow: true,
    }

    changeRightShow = ()=>{
      if (this.state.isRightShow) {
        this.setState({isRightShow:false});
      }
      else{
        this.setState({isRightShow:true});
      }
    }

    //使用我封装的3D 还是 iframe引入 ？
    isMyThreeD = false;

    repeatRender(mouseControls:any,renderer:any,scene:any,camera:any) {
        //请求动画帧，屏幕每刷新一次调用一次，绑定屏幕刷新频率
        requestAnimationFrame(()=>this.repeatRender(mouseControls,renderer,scene,camera));
        mouseControls.update(); //实时更新轨道控制
        //   this.cube.rotation.y += 0.01; //以y为轴心的旋转角度每帧自加0.01
        renderer.render(scene, camera); //将场景和相机进行渲染
    }

    createThreeD(){
        let scene = new THREE.Scene(); //新建场景
        let width = 600; //窗口宽度
        let height = 320; //窗口高度
        let k = width / height; //窗口宽高比
        let camera = new THREE.PerspectiveCamera(75, k, 0.1, 1000); //透视相机
        camera.position.set(0, 0, 25); //设置相机位置
        //创建渲染器
        let renderer = new THREE.WebGLRenderer({
          antialias: true, //抗锯齿
          alpha: true,
        });
        renderer.setSize(width, height); //设置渲染区域尺寸
        (document.getElementById("container") as HTMLElement).appendChild(renderer.domElement); //将画布添加到container中


        // 创建天空球
        let geometry = new THREE.SphereGeometry(300, 300, 300); //几何体
        let material = new THREE.MeshBasicMaterial({
          map: new THREE.TextureLoader().load(Galaxy), //导入图片纹理
          color: 0xffffff,
          //材质背面显示
          side: THREE.BackSide,
        });
        let mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
        // let cubeTexture = new THREE.CubeTextureLoader().load([
        //     right,
        //     left,
        //     top,
        //     bottom,
        //     front,
        //     back,
        //   ]);
        //   scene.background = cubeTexture; //设置场景背景

         //创建轨道控制//没有缩放阻尼
        let mouseControls = new OrbitControls(
          camera,
          renderer.domElement
        ); //创建控件对象
        mouseControls.enablePan = true; //右键平移拖拽
        mouseControls.enableZoom = true; //鼠标缩放
        mouseControls.minDistance = 0; //相机距离原点的距离范围
        mouseControls.maxDistance = 100;
        mouseControls.enableDamping = true; //滑动阻尼
        mouseControls.dampingFactor = 0.1; //(默认.25)
        mouseControls.maxPolarAngle = (Math.PI / 4) * 3; //y旋转角度范围
        mouseControls.minPolarAngle = Math.PI / 4;
        // tmouseControls.autoRotate = true; //自转(相机)
        // mouseControls.autoRotateSpeed = 5; //自转速度

        //创建光源
        // let ambientLight = new THREE.AmbientLight(0x6aceff); //设置环境光
        // scene.add(ambientLight); //将环境光添加到场景中
        // let pointLight = new THREE.PointLight(0xffffff, 1, 0);
        // pointLight.position.set(10, 10, 0); //设置点光源位置
        // scene.add(pointLight); //将点光源添加至场景
        let lightColor = new THREE.Color(0xffffff);
        let ambient = new THREE.AmbientLight(lightColor); //环境光
        ambient.intensity = 2.0;
        ambient.name = "环境光";
        scene.add(ambient);
        let directionalLight1 = new THREE.DirectionalLight(lightColor);
        directionalLight1.position.set(100, 100, 100);
        directionalLight1.intensity = 3.0;
        scene.add(directionalLight1);
        let directionalLight3 = new THREE.DirectionalLight(lightColor);
        directionalLight3.position.set(100, 0, 0);
        directionalLight3.intensity = 3.0;
        scene.add(directionalLight3);

        let loader = new GLTFLoader();
        //此路径是相当对于public中index.html的，模型必须放在public路径下
        loader.load("module/the_hornet_military_helmet.glb", (gltf:any) => {
          gltf.scene.position.set(0, 0, 0);
          scene.add(gltf.scene);
          this.changeAngle(camera,gltf.scene,OrbitControls,renderer);
        });

        //请求动画帧，屏幕每刷新一次调用一次，绑定屏幕刷新频率
          //重复渲染
          this.repeatRender(mouseControls,renderer,scene,camera);
    }

    changeAngle(camera:any,object:any,orbitControls:any,renderer:any){
      var boxHelper = new THREE.BoxHelper();

      boxHelper.setFromObject(object);

      boxHelper.geometry.computeBoundingSphere();//一定要先调用计算包围盒后再生成

      var center = boxHelper.geometry.boundingSphere.center;//包围球中心

      var radius = boxHelper.geometry.boundingSphere.radius;//包围球半径

      var cameraPos = new THREE.Vector3(-object.position.x + radius * 1, object.position.y , object.position.z );//相机自适应的位置

      var lookPos = new THREE.Vector3(center.x + object.position.x, center.y + object.position.y, center.z + object.position.z);//相机及控制器自适应的目标

      camera.position.copy(cameraPos);//初始化场景时，相机自适应的位置

      orbitControls.target = lookPos;//初始化场景时，相机控制器的目标

      camera.lookAt(lookPos);//初始化场景时，相机的目标,要在OrbitControls实例化之后
      // var controls = OrbitControls( camera, renderer.domElement );
      // controls.target = lookPos;
    }

    //卸载本组件
    unmountThis(tid:string):void{
        pubsub.publish('decreseInfo',{tid:tid});
    }

    componentDidMount(): void {
      if (this.isMyThreeD) {
        this.createThreeD();
      }
      const _t = this;
      this.moveRef.current!.onmousedown = function(e){
        let oleft = e.offsetX;
	      let otop = e.offsetY;
        document.onmousemove = function(e){
          var left = e.clientX-oleft;
          var top = e.clientY-otop;
          _t.divMoveRef.current!.style.left = left  + "px";
          _t.divMoveRef.current!.style.top = top  + "px";
        }
      }
      this.moveRef.current!.onmouseup = function(){
        document.onmousemove = null;
      }
    }

    
//用来处理欲接收元素携带的数据信息 -- 用于接收容器---武器/左侧装备
 weaponDropHandler(ev: any) {
  //阻止默认行为
  ev.preventDefault();
  console.log("first")
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
// -- 用于接收容器  当某被拖动的对象在另一对象容器范围内拖动时触发此事件350ms
 dragOverHandler(ev: any) {
    //阻止默认行为
    ev.preventDefault();
    console.log(ev)
    ev.onkeydown = function(e:any){
        console.log(e);
    }
    // console.log(ev.target);
    //设置放置效果
    ev.dataTransfer.dropEffect = "move";
}


  test = {tid:31,wid:1,hei:1,lv:1,src:'./picture/things/weapon/sight.png',tname:'单倍',ttype:'瞄准镜',dsrc:'https://sketchfab.com/models/9e06921807da4dde9d77596dc58ed8f2/embed'};



  render() {
    return (
      <div className={style.body} data-level={this.item.lv} data-isrightshow={this.state.isRightShow} ref={this.divMoveRef}>
        <button className={style.quit} onClick={()=>{this.unmountThis(this.item.tid)}}> X </button>
        <div className={style.move} ref={this.moveRef}> </div>
          <div className={style.left}>
              <div>
                                {/* 配件 */}
                <div className={style.aided} data-level={this.item.lv}>
                  <div onDrop={this.weaponDropHandler} onDragOver={this.dragOverHandler} data-sign={'dep'}>瞄准镜</div>
                  <div onDrop={this.weaponDropHandler} onDragOver={this.dragOverHandler} data-sign={'dep'}>枪管</div>
                  <div onDrop={this.weaponDropHandler} onDragOver={this.dragOverHandler} data-sign={'dep'}>激光</div>
                  <div onDrop={this.weaponDropHandler} onDragOver={this.dragOverHandler} data-sign={'dep'}>弹匣</div>
                  <div onDrop={this.weaponDropHandler} onDragOver={this.dragOverHandler} data-sign={'dep'}>枪托</div>
                  <div onDrop={this.weaponDropHandler} onDragOver={this.dragOverHandler} data-sign={'dep'}>握把</div>
                </div>
                {
                  this.isMyThreeD?<div className={style.container} id='container'></div>:
                  <iframe
                  title='xxx'
                  frameBorder={0}
                  className={style.iframe}
                  // allowFullScreen = {true}
                  // allow="autoplay; fullscreen; xr-spatial-tracking" 
                  // xr-spatial-tracking = {true}
                  // execution-while-out-of-viewport  = {true}
                  // execution-while-not-rendered = {true}
                  // web-share  = {true}
                  src= {this.item.dsrc + "?autostart=1"}> 
                 </iframe>
                }
              </div>
              
              <div>
                <span className={style.levelSpan} data-level={this.item.lv}>{this.item.tname}</span>
                <button onClick={this.changeRightShow} className={style.rightShowBut} data-isrightshow={this.state.isRightShow}>+</button>
              </div>
              <div>
                <span>精度 : <NCroll num={10} key={1} /> </span>
                <span>等级 : <NCroll num={6} key={2} /></span>
                <span>损坏 : <NCroll num={10} key={3} />%</span>
                <span>射速 : <NCroll num={750} key={4} /></span>
                <span>基础伤害 : <NCroll num={18} key={5} /></span>
                <span>附加伤害 : <NCroll num={5} key={6} /></span>
                <span>重量 : <NCroll num={8} key={7}/></span>
              </div>
          </div>
          <div  className={style.right} data-isrightshow={this.state.isRightShow} >
              <pre>
              猫头鹰眼周的羽毛呈辐射状，细羽的排列形成脸盘，面形似猫，因此得名为猫头鹰。它周身羽毛大多为褐色，散缀细斑，稠密而松软，飞行时无声。
              </pre>
          </div>
      </div>
    )
  }
}

