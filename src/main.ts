import { createApp } from 'vue';
import App from './App.vue';
import '/@/style/index.less';
import { router } from './router';
import * as THREE from 'three';

async function init() {
  const app = createApp(App);

  app.config.globalProperties.$THREE = THREE;

  app.use(router);

  app.mount('#app');
}
init();
