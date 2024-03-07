import { BaseLayout } from '../constant';

const toolsRoutes = {
  path: '/tools',
  name: 'Tools',
  component: BaseLayout,
  children: [
    {
      path: '/tools/git',
      name: 'ToolsGit',
      component: () => import('/@/views/tools/git/index.vue'),
      title: '测试',
    },
  ],
};

export default toolsRoutes;
