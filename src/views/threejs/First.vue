<template>
  <div class="h-full w-full">
    <div class="h-[40px] px-[12px] flex items-center">
      <Button @click="toggleScreen">全屏缩放</Button>
    </div>
    <div id="first-three" ref="threeDom" class="dom-height w-full"> </div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { Button } from 'ant-design-vue';
  // const { proxy } = getCurrentInstance() as any;
  // const THREE = proxy.$THREE;
  import * as THREE from 'three';
  import { nextTick } from 'vue';
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

  let dom: any = nextTick().then(() => {
    console.log(document?.getElementById('first-three'));
    return document?.getElementById('first-three');
  });

  console.log(dom);
  const threeDom = ref<any>(null);
  console.log(threeDom.value);

  const height = threeDom.value?.offsetHeight as number;
  const width = threeDom.value?.offsetWidth as number;
  console.log(height, width);

  // 视角
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('gray');

  // 相机
  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  // 渲染器
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);
  nextTick(() => {
    document.getElementById('first-three')?.appendChild(renderer.domElement);
  });

  // 创建几何体
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  // 创建材质
  const parentMaterial = new THREE.MeshBasicMaterial({ color: '#f4b6b2' });
  const material = new THREE.MeshBasicMaterial({ color: '#ff6666' });
  // 网格
  const parentCube = new THREE.Mesh(geometry, parentMaterial);
  const cube = new THREE.Mesh(geometry, material);
  // cube.position.x = 1;
  // cube.position.y = 1;
  // cube.position.z = 1;
  // 设置父子元素位置
  parentCube.position.set(-3, 0, 0);
  cube.position.set(3, 0, 0);
  cube.scale.set(1, 1, 1);
  cube.rotation.x = Math.PI / 4;
  cube.rotation.y = Math.PI / 4;
  cube.rotation.z = Math.PI / 4;
  // cube.rotation. = new THREE.Euler(0, 1, 1, 'XYZ');
  parentCube.add(cube);

  scene.add(parentCube);

  // 设置相机位置
  // camera.position.x = 2;
  // camera.position.y = 2;
  // camera.position.z = 5;
  camera.position.set(2, 2, 5);
  camera.lookAt(0, 0, 1);

  // 添加坐标辅助线
  const axesHelper = new THREE.AxesHelper(5);
  scene.add(axesHelper);

  // 添加控制器
  const controls = new OrbitControls(camera, renderer.domElement);
  // 设置带阻尼
  controls.enableDamping = true;
  // 设置阻尼系数
  controls.dampingFactor = 0.1;
  // 自动旋转
  // controls.autoRotate = true;

  // 渲染场景
  function animate() {
    controls.update();
    requestAnimationFrame(animate);
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  animate();

  // 监听窗口变化
  window.addEventListener('resize', () => {
    const windowWidth = window.innerWidth as number;
    const windowHeight = window.innerHeight as number;
    renderer.setSize(windowWidth, windowHeight);
    camera.aspect = windowWidth / windowHeight;
    camera.updateProjectionMatrix(1);
  });

  function toggleScreen() {
    renderer.domElement.requestFullscreen();
  }
</script>

<style scoped lang="less">
  .dom-height {
    height: calc(100% - 40px);
  }
</style>
