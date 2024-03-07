import { createApp } from 'vue';
import App from './App.vue';
import '/@/style/index.less';
import { router } from './router';

async function init() {
  const app = createApp(App);

  app.use(router);

  app.mount('#app');
}
init();
