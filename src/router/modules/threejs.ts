import { BaseLayout } from '../constant';

const threeRoutes = {
  path: '/three',
  name: 'Three',
  component: BaseLayout,
  children: [
    {
      path: '/three/first',
      name: 'ThreeFirst',
      component: () => import('/@/views/threejs/First.vue'),
      meta: {
        title: '第一个threejs页面',
      },
    },
  ],
  meta: {
    title: 'threejs',
  },
};

export default threeRoutes;
