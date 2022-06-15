import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from "path";
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import vueI18n from '@intlify/vite-plugin-vue-i18n'

// https://vitejs.dev/config/
export default(({ mode }) => {
  return  defineConfig({
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
        imports: [
          "vue", 
          "vue-router"
        ],
        dirs: [
          'src/store',
          'src/server',
          'src/model/banner'
        ]
      }),
      Components({
        resolvers: [ElementPlusResolver()],
        dirs: ['src/components']
      }),
      vueI18n()
    ],
    server: {
      host: '0.0.0.0',
      proxy: {
        '/api': {
          target: loadEnv(mode, process.cwd()).VITE_REQUEST_URL,
          secure: false,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, '')
        }
      }
    },
    define: {
      'process.env': loadEnv(mode, process.cwd())
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src') // 路径别名
      },
      extensions: ['.js', '.json', '.ts', '.vue'] // 使用路径别名时想要省略的后缀名
    },
    css: {
      // css预处理
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/styles/icons/iconfont.scss";'
        }
      },
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
          require('postcss-flexbugs-fixes'),
          require('postcss-px-2-vw')({
            viewportWidth: 1920,
            viewportHeight: 1080,
            propList: ['*'],
            viewportUnit: 'vw',
            fontViewportUnit: 'vw',
            unitPrecision: 3,
            minPixelValue: 1,
            mediaQuery: false
          })
        ]
      }
    }
  });
});