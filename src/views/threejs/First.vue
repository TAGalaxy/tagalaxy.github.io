<template>
  <div id="first-three" class="h-full w-full"> </div>
</template>

<script setup lang="ts">
  import { getCurrentInstance } from 'vue';
  const { proxy } = getCurrentInstance() as any;
  const THREE = proxy.$THREE;
  // import * as THREE from 'three';
  import { nextTick } from 'vue';

  // 视角
  const scene = new THREE.Scene();
  // 相机
  const camera = new THREE.PerspectiveCamera(45, 600 / 600, 0.1, 1000);
  // 渲染器
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(600, 600);
  nextTick(() => {
    document.getElementById('first-three')?.appendChild(renderer.domElement);
  });

  // 创建几何体
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  // 创建材质
  const material = new THREE.MeshBasicMaterial({ color: '#ff6666' });
  // 网格
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  // 设置相机位置
  camera.position.z = 5;
  camera.lookAt(0, 0, 0);

  // 渲染场景

  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  animate();
</script>

<style scoped></style>
