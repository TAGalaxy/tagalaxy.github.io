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
      meta: {
        title: '测试',
      },
    },
  ],
  meta: {
    title: '实用工具',
  },
};

export default toolsRoutes;
