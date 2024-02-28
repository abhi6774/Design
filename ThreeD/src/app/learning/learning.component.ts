import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import * as dat from "dat.gui";
import * as THREE from "three";
import { AxesHelper, BoxGeometry, Mesh, PerspectiveCamera } from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// const stars = new Image();
const stars = "/assets/img/stars.jpg";
// const bunchStars = new Image();
const galaxy = "/assets/img/galaxy.jpg";

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css']
})
export class LearningComponent implements AfterViewInit, OnDestroy {

  title = "Learning 3D";

  constructor() {
    this.animate = this.animate.bind(this);
    this.initateScene3D = this.initateScene3D.bind(this);
    this.mousemove = this.mousemove.bind(this);

  }

  renderer = new THREE.WebGLRenderer();

  scene = new THREE.Scene();

  camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);


  gui = new dat.GUI();

  options = {
    sphereColor: "#ffea00",
    wireframe: false,
    speed: 0.01,
    angle: 0.2,
    penumbra: 0.001,
    intensity: 1

  };

  orbitControls = new OrbitControls(this.camera, this.renderer.domElement);

  // Background texture loader
  textureLoader = new THREE.TextureLoader();
  cubeTextureLoader = new THREE.CubeTextureLoader();


  boxGeometry = new BoxGeometry();
  boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00FF00 });
  box = new THREE.Mesh(this.boxGeometry, this.boxMaterial);

  box2Geometry = new BoxGeometry(4, 4, 4);
  box2Material = new THREE.MeshBasicMaterial({});
  box2MultiMaterial = [
    new THREE.MeshBasicMaterial({ map: this.textureLoader.load(stars) }),
    new THREE.MeshBasicMaterial({ map: this.textureLoader.load(stars) }),
    new THREE.MeshBasicMaterial({ map: this.textureLoader.load(galaxy) }),
    new THREE.MeshBasicMaterial({ map: this.textureLoader.load(stars) }),
    new THREE.MeshBasicMaterial({ map: this.textureLoader.load(galaxy) }),
    new THREE.MeshBasicMaterial({ map: this.textureLoader.load(stars) }),
  ];

  box2 = new THREE.Mesh(this.box2Geometry, this.box2MultiMaterial);


  planeGeometry = new THREE.PlaneGeometry(30, 30);
  planeMaterial = new THREE.MeshStandardMaterial({ color: 0xFFFFFF, side: THREE.DoubleSide });
  plane = new THREE.Mesh(this.planeGeometry, this.planeMaterial);


  sphereGeometry = new THREE.SphereGeometry(4);
  sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x0000FF, wireframe: false });
  sphere = new THREE.Mesh(this.sphereGeometry, this.sphereMaterial);

  // Light
  ambientLight = new THREE.AmbientLight(0x333333);
  // dLight = new THREE.DirectionalLight(0xFFFFFF, 0.8);
  spotLight = new THREE.SpotLight(0xFFFFFF);



  // Helpers
  axesHelper = new AxesHelper(3);
  gridHelper = new THREE.GridHelper(30);
  // dLightHelper = new THREE.DirectionalLightHelper(this.dLight, 5);
  // dLightShadowHelper = new THREE.CameraHelper(this.dLight.shadow.camera);
  spotLightHelper = new THREE.SpotLightHelper(this.spotLight);

  cursorPosition = new THREE.Vector2();
  raycaster = new THREE.Raycaster();

  sphereId = this.sphere.id;


  initateScene3D() {
    this.scene.add(this.axesHelper);
    this.scene.add(this.gridHelper);
    this.scene.add(this.ambientLight);
    this.scene.add(this.spotLight);

    this.scene.add(this.box2);
    this.box2.position.set(0, 15, 10);

    // this.scene.add(this.dLight);
    // this.scene.add(this.dLightHelper);
    // this.scene.add(this.dLightShadowHelper);

    // this.scene.fog = new THREE.Fog(0xFFFFFF,0, 200);
    this.scene.fog = new THREE.FogExp2(0xFFFFFF, 0.01);
    // this.renderer.setClearColor(0xFFEA00);
    this.scene.add(this.spotLightHelper);
    this.camera.position.set(-10, 30, 30);
    this.orbitControls.update();
    this.scene.add(this.box);
    this.scene.add(this.plane);
    this.scene.add(this.sphere);
    this.plane.rotation.x = -0.5 * Math.PI;
    this.sphere.position.set(-10, 10, 0);
    this.spotLight.position.set(-100, 100, 0);
    this.spotLight.angle = 0.2;
    // this.dLight.position.set(-30, 50, 0);

    this.plane.receiveShadow = true;
    this.sphere.castShadow = true;
    this.spotLight.castShadow = true;
    // this.dLight.castShadow = true;
    // this.dLight.shadow.camera.bottom = -12;

    // Texture Loader
    // this.scene.background = this.textureLoader.load("/assets/img/space-galaxy-background.jpg");
    this.scene.background = this.cubeTextureLoader.load([
      "http://localhost:4200/assets/2k/2k_stars_cube.jpg",
      "http://localhost:4200/assets/2k/2k_stars_cube.jpg",
      "http://localhost:4200/assets/2k/2k_stars_cube.jpg",
      "http://localhost:4200/assets/2k/2k_stars_cube.jpg",
      "http://localhost:4200/assets/2k/2k_stars_cube.jpg",
      "http://localhost:4200/assets/2k/2k_stars_cube.jpg",
    ]);
  }

  // Ball Bouncing
  step = 0;

  animate() {
    if (!this?.box) return;
    this.box.rotation.x += 0.01;
    this.box.rotation.y += 0.01;
    this.step += this.options.speed;

    this.spotLight.angle = this.options.angle;
    this.spotLight.penumbra = this.options.penumbra;
    this.spotLight.intensity = this.options.intensity;
    this.spotLightHelper.update();

    this.sphere.position.y = 10 * Math.abs(Math.sin(this.step));
    this.raycaster.setFromCamera(this.cursorPosition, this.camera);

    const intersects = this.raycaster.intersectObjects(this.scene.children);

    for (let i = 0; i < intersects.length; i++) {
      if (intersects[i].object.id === this.sphereId)
        console.log(this.sphere.id);
    }

    this.renderer.render(this.scene, this.camera);
  }

  setGUI() {
    this.gui.addColor(this.options, 'sphereColor').onChange((e) => {
      this.sphere.material.color.set(e);
    });
    this.gui.add(this.options, 'wireframe').onChange((e) => {
      this.sphere.material.wireframe = e;
    });
    this.gui.add(this.options, 'speed', 0, 0.1);
    this.gui.add(this.options, 'angle', 0, 1);
    this.gui.add(this.options, 'penumbra', 0, 1);
    this.gui.add(this.options, 'intensity', 0, 1);

  }

  mousemove(e: MouseEvent) {
    this.cursorPosition.x = (e.clientX / window.innerWidth) * 2 - 1;
    this.cursorPosition.y = (e.clientY / window.innerHeight) * 2 + 1;
  }

  ngAfterViewInit() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = true;
    document.body.appendChild(this.renderer.domElement);
    this.initateScene3D();
    this.setGUI();
    this.renderer.setAnimationLoop(this.animate);
    window.addEventListener("mousemove", this.mousemove);
  }


  ngOnDestroy(): void {
    window.removeEventListener("mousemove", this.mousemove);
  }

}
