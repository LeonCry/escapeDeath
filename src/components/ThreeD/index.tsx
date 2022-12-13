import React, { Component } from 'react'
import style from './index.module.scss'
import * as THREE from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import Galaxy from "../../skybox/acc.jpg";


export default class ThreeD extends Component {


    repeatRender(mouseControls:any,renderer:any,scene:any,camera:any) {
        //请求动画帧，屏幕每刷新一次调用一次，绑定屏幕刷新频率
        requestAnimationFrame(()=>this.repeatRender(mouseControls,renderer,scene,camera));
        mouseControls.update(); //实时更新轨道控制
        //   this.cube.rotation.y += 0.01; //以y为轴心的旋转角度每帧自加0.01
        renderer.render(scene, camera); //将场景和相机进行渲染
    }

    createThreeD(){
        let scene = new THREE.Scene(); //新建场景
        let width = 480; //窗口宽度
        let height = 220; //窗口高度
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
        loader.load("module/katana_low_poly.glb", (gltf:any) => {
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




    componentDidMount(): void {
        this.createThreeD();
    }
  render() {
    return (
      <div className={style.body}>
        <button className={style.quit}> X </button>
        <div className={style.move}> ↖ </div>
        <div className={style.container} id='container'></div>
        <div><span>酒瓶子</span></div>
        <div>
          <span>水分-50</span><span>清醒-100</span>
          <span>理智-100</span><span>猝死+10%</span>
          <span>记忆-50</span>
          <br /><br />

        
        </div>
        <div><span>
        酒瓶子是用来承酒的。酒瓶子是用来承酒的。酒瓶子是用来承酒的。
        酒瓶子是用来承酒的。酒瓶子是用来承酒的。酒瓶子是用来承酒的。酒瓶子是用来承酒的。酒瓶子是用来承酒的。
        酒瓶子是用来承酒的。酒瓶子是用来承酒的。酒瓶子是用来承酒的。酒瓶子是用来承酒的。酒瓶子是用来承酒的。
        酒瓶子是用来承酒的。酒瓶子是用来承酒的。酒瓶子是用来承酒的。酒瓶子是用来承酒的。酒瓶子是用来承酒的。
        酒瓶子是用来承酒的。酒瓶子是用来承酒的。酒瓶子是用来承酒的。酒瓶子是用来承酒的。酒瓶子是用来承酒的。
        酒瓶子是用来承酒的。酒瓶子是用来承酒的。酒瓶子是用来承酒的。酒瓶子是用来承酒的。酒瓶子是用来承酒的。
        </span></div>
        
      </div>
    )
  }
}

