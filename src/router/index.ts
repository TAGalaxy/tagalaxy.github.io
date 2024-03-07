import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/home', component: () => import('/@/components/home/index.vue'), name: 'Hoom' },
  { path: '/', redirect: '/home', name: 'root' },
];

const modules = import.meta.globEager('./modules/**/*.ts');
const routeModuleList: any[] = [];

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

export const router = createRouter({
  history: createWebHistory(),
  routes: [...routes, ...routeModuleList],
});
