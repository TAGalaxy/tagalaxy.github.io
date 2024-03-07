import vue from '@vitejs/plugin-vue';
import type { UserConfig, ConfigEnv } from 'vite';
import { resolve } from 'path';

function pathResolve(dir: string) {
  console.log(dir);
  return resolve(process.cwd(), '.', dir);
}

export default ({ command, mode }: ConfigEnv): UserConfig => {
  return {
    plugins: [vue()],
    resolve: {
      alias: [
        // /@/xxxx => src/xxxx
        {
          find: /\/@\//,
          replacement: pathResolve('src') + '/',
        },
      ],
    },
    define: {
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'true',
    },
  };
};
